package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type Commits struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCommits(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Commits {
	return &Commits{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// BulkCreateOrUpdateAnnotations - Bulk upload of annotations.
// Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
//
// Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.
//
// ### Sample cURL request:
// ```
// curl --location 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001/annotations' \
// --header 'Content-Type: application/json' \
// --data-raw '[
//
//	{
//	      "external_id": "mysystem-annotation001",
//	      "title": "Security scan report",
//	      "annotation_type": "VULNERABILITY",
//	      "summary": "This line represents a security threat.",
//	      "severity": "HIGH",
//	    "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
//	      "line": 42
//	},
//	{
//	      "external_id": "mySystem-annotation002",
//	      "title": "Bug report",
//	      "annotation_type": "BUG",
//	      "result": "FAILED",
//	      "summary": "This line might introduce a bug.",
//	      "severity": "MEDIUM",
//	    "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java",
//	      "line": 13
//	}
//
// ]'
// ```
//
// ### Possible field values:
// annotation_type: VULNERABILITY, CODE_SMELL, BUG
// result: PASSED, FAILED, IGNORED, SKIPPED
// severity: HIGH, MEDIUM, LOW, CRITICAL
//
// Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
func (s *Commits) BulkCreateOrUpdateAnnotations(ctx context.Context, request operations.BulkCreateOrUpdateAnnotationsRequest) (*operations.BulkCreateOrUpdateAnnotationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BulkCreateOrUpdateAnnotationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReportAnnotations = out
		}
	}

	return res, nil
}

// CreateOrUpdateAnnotation - Creates or updates an individual annotation for the specified report.
// Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
//
// Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.
//
// ### Sample cURL request:
// ```
// curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mySystem-001/annotations/mysystem-annotation001' \
// --header 'Content-Type: application/json' \
//
//	--data-raw '{
//	    "title": "Security scan report",
//	    "annotation_type": "VULNERABILITY",
//	    "summary": "This line represents a security thread.",
//	    "severity": "HIGH",
//	    "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
//	    "line": 42
//	}'
//
// ```
//
// ### Possible field values:
// annotation_type: VULNERABILITY, CODE_SMELL, BUG
// result: PASSED, FAILED, IGNORED, SKIPPED
// severity: HIGH, MEDIUM, LOW, CRITICAL
//
// Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
func (s *Commits) CreateOrUpdateAnnotation(ctx context.Context, request operations.CreateOrUpdateAnnotationRequest) (*operations.CreateOrUpdateAnnotationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateOrUpdateAnnotationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReportAnnotation = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreateOrUpdateReport - Creates or updates a report for the specified commit.
// To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.
//
// ### Sample cURL request:
// ```
// curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001' \
// --header 'Content-Type: application/json' \
//
//	--data-raw '{
//	    "title": "Security scan report",
//	    "details": "This pull request introduces 10 new dependency vulnerabilities.",
//	    "report_type": "SECURITY",
//	    "reporter": "mySystem",
//	    "link": "http://www.mysystem.com/reports/001",
//	    "result": "FAILED",
//	    "data": [
//	        {
//	            "title": "Duration (seconds)",
//	            "type": "DURATION",
//	            "value": 14
//	        },
//	        {
//	            "title": "Safe to merge?",
//	            "type": "BOOLEAN",
//	            "value": false
//	        }
//	    ]
//	}'
//
// ```
//
// ### Possible field values:
// report_type: SECURITY, COVERAGE, TEST, BUG
// result: PASSED, FAILED, PENDING
// data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT
//
// #### Data field formats
// | Type  Field   | Value Field Type  | Value Field Display |
// |:--------------|:------------------|:--------------------|
// | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
// | BOOLEAN	| Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
// | DATE  | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise  it will be displayed as an absolute date. |
// | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
// | LINK | Object: `{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}` | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. |
// | NUMBER | Number | The value will be read as a JSON number and large numbers will be  displayed in a human readable format (e.g. 14.3k). |
// | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
// | TEXT | String | The value will be read as a JSON string and will be displayed as-is |
//
// Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
func (s *Commits) CreateOrUpdateReport(ctx context.Context, request operations.CreateOrUpdateReportRequest) (*operations.CreateOrUpdateReportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateOrUpdateReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Report = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeleteAnnotation - Deletes a single Annotation matching the provided ID.
func (s *Commits) DeleteAnnotation(ctx context.Context, request operations.DeleteAnnotationRequest) (*operations.DeleteAnnotationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteAnnotationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteReport - Deletes a single Report matching the provided ID.
func (s *Commits) DeleteReport(ctx context.Context, request operations.DeleteReportRequest) (*operations.DeleteReportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove - Redact the authenticated user's approval of the specified commit.
//
// This operation is only available to users that have explicit access to
// the repository. In contrast, just the fact that a repository is
// publicly accessible to users does not give them the ability to approve
// commits.
func (s *Commits) DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetAnnotation - Returns a single Annotation matching the provided ID.
func (s *Commits) GetAnnotation(ctx context.Context, request operations.GetAnnotationRequest) (*operations.GetAnnotationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAnnotationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReportAnnotation = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetAnnotationsForReport - Returns a paginated list of Annotations for a specified report.
func (s *Commits) GetAnnotationsForReport(ctx context.Context, request operations.GetAnnotationsForReportRequest) (*operations.GetAnnotationsForReportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAnnotationsForReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedAnnotations
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedAnnotations = out
		}
	}

	return res, nil
}

// GetReport - Returns a single Report matching the provided ID.
func (s *Commits) GetReport(ctx context.Context, request operations.GetReportRequest) (*operations.GetReportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Report = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetReportsForCommit - Returns a paginated list of Reports linked to this commit.
func (s *Commits) GetReportsForCommit(ctx context.Context, request operations.GetReportsForCommitRequest) (*operations.GetReportsForCommitResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetReportsForCommitResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedReports
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedReports = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugCommitCommit - Returns the specified commit.
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a1
//
//	{
//	    "rendered": {
//	        "message": {
//	        "raw": "Add a GEORDI_OUTPUT_DIR setting",
//	        "markup": "markdown",
//	        "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
//	        "type": "rendered"
//	        }
//	    },
//	    "hash": "f7591a13eda445d9a9167f98eb870319f4b6c2d8",
//	    "repository": {
//	        "name": "geordi",
//	        "type": "repository",
//	        "full_name": "bitbucket/geordi",
//	        "links": {
//	            "self": {
//	                "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi"
//	            },
//	            "html": {
//	                "href": "https://bitbucket.org/bitbucket/geordi"
//	            },
//	            "avatar": {
//	                "href": "https://bytebucket.org/ravatar/%7B85d08b4e-571d-44e9-a507-fa476535aa98%7D?ts=1730260"
//	            }
//	        },
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	    },
//	    "links": {
//	        "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
//	        },
//	        "comments": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/comments"
//	        },
//	        "patch": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/patch/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
//	        },
//	        "html": {
//	            "href": "https://bitbucket.org/bitbucket/geordi/commits/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
//	        },
//	        "diff": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diff/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
//	        },
//	        "approve": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/approve"
//	        },
//	        "statuses": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/statuses"
//	        }
//	    },
//	    "author": {
//	        "raw": "Brodie Rao <a@b.c>",
//	        "type": "author",
//	        "user": {
//	            "display_name": "Brodie Rao",
//	            "uuid": "{9484702e-c663-4afd-aefb-c93a8cd31c28}",
//	            "links": {
//	                "self": {
//	                    "href": "https://api.bitbucket.org/2.0/users/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D"
//	                },
//	                "html": {
//	                    "href": "https://bitbucket.org/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D/"
//	                },
//	                "avatar": {
//	                    "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca/613070db-28b0-421f-8dba-ae8a87e2a5c7/128"
//	                }
//	            },
//	            "type": "user",
//	            "nickname": "brodie",
//	            "account_id": "557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca"
//	        }
//	    },
//	    "summary": {
//	        "raw": "Add a GEORDI_OUTPUT_DIR setting",
//	        "markup": "markdown",
//	        "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
//	        "type": "rendered"
//	    },
//	    "participants": [],
//	    "parents": [
//	        {
//	            "type": "commit",
//	            "hash": "f06941fec4ef6bcb0c2456927a0cf258fa4f899b",
//	            "links": {
//	                "self": {
//	                    "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
//	                },
//	                "html": {
//	                    "href": "https://bitbucket.org/bitbucket/geordi/commits/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
//	                }
//	            }
//	        }
//	    ],
//	    "date": "2012-07-16T19:37:54+00:00",
//	    "message": "Add a GEORDI_OUTPUT_DIR setting",
//	    "type": "commit"
//	}
//
// ```
func (s *Commits) GetRepositoriesWorkspaceRepoSlugCommitCommit(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitCommitRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Commit = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugCommitCommitComments - Returns the commit's comments.
//
// This includes both global and inline comments.
//
// The default sorting is oldest to newest and can be overridden with
// the `sort` query parameter.
func (s *Commits) GetRepositoriesWorkspaceRepoSlugCommitCommitComments(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedCommitComments
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedCommitComments = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID - Returns the specified commit comment.
func (s *Commits) GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CommitComment = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugCommits - These are the repository's commits. They are paginated and returned
// in reverse chronological order, similar to the output of `git log`.
// Like these tools, the DAG can be filtered.
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/
//
// Returns all commits in the repo in topological order (newest commit
// first). All branches and tags are included (similar to
// `git log --all`).
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master
//
// Returns all commits in the repo that are not on master
// (similar to `git log --all ^master`).
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar
//
// Returns all commits that are on refs `foo` or `bar`, but not on `fu` or
// `fubar` (similar to `git log foo bar ^fu ^fubar`).
//
// An optional `path` parameter can be specified that will limit the
// results to commits that affect that path. `path` can either be a file
// or a directory. If a directory is specified, commits are returned that
// have modified any file in the directory tree rooted by `path`. It is
// important to note that if the `path` parameter is specified, the commits
// returned by this endpoint may no longer be a DAG, parent commits that
// do not modify the path will be omitted from the response.
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master
//
// Returns all commits that are on refs `foo` or `bar`, but not on `master`
// that changed the file README.md.
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master
//
// Returns all commits that are on refs `foo` or `bar`, but not on `master`
// that changed to a file in any file in the directory src or its children.
//
// Because the response could include a very large number of commits, it
// is paginated. Follow the 'next' link in the response to navigate to the
// next page of commits. As with other paginated resources, do not
// construct your own links.
//
// When the include and exclude parameters are more than can fit in a
// query string, clients can use a `x-www-form-urlencoded` POST instead.
func (s *Commits) GetRepositoriesWorkspaceRepoSlugCommits(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commits", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedChangeset
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedChangeset = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugCommitsRevision - These are the repository's commits. They are paginated and returned
// in reverse chronological order, similar to the output of `git log`.
// Like these tools, the DAG can be filtered.
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/master
//
// Returns all commits on rev `master` (similar to `git log master`).
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master
//
// Returns all commits on ref `dev` or `foo`, except those that are reachable on
// `master` (similar to `git log dev foo ^master`).
//
// An optional `path` parameter can be specified that will limit the
// results to commits that affect that path. `path` can either be a file
// or a directory. If a directory is specified, commits are returned that
// have modified any file in the directory tree rooted by `path`. It is
// important to note that if the `path` parameter is specified, the commits
// returned by this endpoint may no longer be a DAG, parent commits that
// do not modify the path will be omitted from the response.
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master
//
// Returns all commits that are on refs `dev` or `foo` or `bar`, but not on `master`
// that changed the file README.md.
//
// ## GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master
//
// Returns all commits that are on refs `dev` or `foo`, but not on `master`
// that changed to a file in any file in the directory src or its children.
//
// Because the response could include a very large number of commits, it
// is paginated. Follow the 'next' link in the response to navigate to the
// next page of commits. As with other paginated resources, do not
// construct your own links.
//
// When the include and exclude parameters are more than can fit in a
// query string, clients can use a `x-www-form-urlencoded` POST instead.
func (s *Commits) GetRepositoriesWorkspaceRepoSlugCommitsRevision(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commits/{revision}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedChangeset
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedChangeset = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDiffSpec - Produces a raw git-style diff.
//
// #### Single commit spec
//
// If the `spec` argument to this API is a single commit, the diff is
// produced against the first parent of the specified commit.
//
// #### Two commit spec
//
// Two commits separated by `..` may be provided as the `spec`, e.g.,
// `3a8b42..9ff173`. When two commits are provided and the `merge` query
// parameter is true or absent, this API produces a 3-way diff, also
// referred to as a merge diff. This is equivalent to merging the left
// branch into the right branch and then computing the diff of the merge
// commit against its first parent (the right branch). These diffs have
// the same behavior as pull requests that show the 3-way diff, such as
// the [Bitbucket Cloud Pull
// Request](https://blog.developer.atlassian.com/a-better-pull-request/).
// For a simple git-style diff, add `merge=false` to the query.
//
// The two commits are interpreted as follows:
//
//   - First commit: the commit containing the changes we wish to preview
//   - Second commit: the commit representing the state to which we want to
//     compare the first commit
//   - **Note**: This is the opposite of the order used in `git diff`.
//
// #### Comparison to patches
//
// While similar to patches, diffs:
//
//   - Don't have a commit header (username, commit message, etc)
//   - Support the optional `path=foo/bar.py` query param to filter
//     the diff to just that one file diff
//
// #### Response
//
// The raw diff is returned as-is, in whatever encoding the files in the
// repository use. It is not decoded into unicode. As such, the
// content-type is `text/plain`.
func (s *Commits) GetRepositoriesWorkspaceRepoSlugDiffSpec(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDiffSpecRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/diff/{spec}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 555:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDiffstatSpec - Produces a response in JSON format with a record for every path
// modified, including information on the type of the change and the
// number of lines added and removed.
//
// #### Single commit spec
//
// If the `spec` argument to this API is a single commit, the diff is
// produced against the first parent of the specified commit.
//
// #### Two commit spec
//
// Two commits separated by `..` may be provided as the `spec`, e.g.,
// `3a8b42..9ff173`. When two commits are provided and the `merge` query
// parameter is true or absent, this API produces a 3-way diff, also
// referred to as a merge diff. This is equivalent to merging the left
// branch into the right branch and then computing the diff of the merge
// commit against its first parent (the right branch). These diffs have
// the same behavior as pull requests that show the 3-way diff, such as
// the [Bitbucket Cloud Pull
// Request](https://blog.developer.atlassian.com/a-better-pull-request/).
// For a simple git-style diff, add `merge=false` to the query.
//
// The two commits are interpreted as follows:
//
//   - First commit: the commit containing the changes we wish to preview
//   - Second commit: the commit representing the state to which we want to
//     compare the first commit
//   - **Note**: This is the opposite of the order used in `git diff`.
//
// #### Sample output
// ```
// curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diffstat/d222fa2..e174964
//
//	{
//	    "pagelen": 500,
//	    "values": [
//	        {
//	            "type": "diffstat",
//	            "status": "modified",
//	            "lines_removed": 1,
//	            "lines_added": 2,
//	            "old": {
//	                "path": "setup.py",
//	                "escaped_path": "setup.py",
//	                "type": "commit_file",
//	                "links": {
//	                    "self": {
//	                        "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/e1749643d655d7c7014001a6c0f58abaf42ad850/setup.py"
//	                    }
//	                }
//	            },
//	            "new": {
//	                "path": "setup.py",
//	                "escaped_path": "setup.py",
//	                "type": "commit_file",
//	                "links": {
//	                    "self": {
//	                        "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/d222fa235229c55dad20b190b0b571adf737d5a6/setup.py"
//	                    }
//	                }
//	            }
//	        }
//	    ],
//	    "page": 1,
//	    "size": 1
//	}
//
// ```
func (s *Commits) GetRepositoriesWorkspaceRepoSlugDiffstatSpec(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/diffstat/{spec}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedDiffstats
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedDiffstats = out
		}
	case httpRes.StatusCode == 555:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugMergeBaseRevspec - Returns the best common ancestor between two commits, specified in a revspec
// of 2 commits (e.g. 3a8b42..9ff173).
//
// If more than one best common ancestor exists, only one will be returned. It is
// unspecified which will be returned.
func (s *Commits) GetRepositoriesWorkspaceRepoSlugMergeBaseRevspec(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest) (*operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/merge-base/{revspec}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Commit = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPatchSpec - Produces a raw patch for a single commit (diffed against its first
// parent), or a patch-series for a revspec of 2 commits (e.g.
// `3a8b42..9ff173` where the first commit represents the source and the
// second commit the destination).
//
// In case of the latter (diffing a revspec), a patch series is returned
// for the commits on the source branch (`3a8b42` and its ancestors in
// our example). For Mercurial, a single patch is returned that combines
// the changes of all commits on the source branch.
//
// While similar to diffs, patches:
//
// * Have a commit header (username, commit message, etc)
// * Do not support the `path=foo/bar.py` query parameter
//
// The raw patch is returned as-is, in whatever encoding the files in the
// repository use. It is not decoded into unicode. As such, the
// content-type is `text/plain`.
func (s *Commits) GetRepositoriesWorkspaceRepoSlugPatchSpec(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPatchSpecRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/patch/{spec}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 555:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugCommitCommitApprove - Approve the specified commit as the authenticated user.
//
// This operation is only available to users that have explicit access to
// the repository. In contrast, just the fact that a repository is
// publicly accessible to users does not give them the ability to approve
// commits.
func (s *Commits) PostRepositoriesWorkspaceRepoSlugCommitCommitApprove(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest) (*operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Participant = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugCommitCommitComments - Creates new comment on the specified commit.
//
// To post a reply to an existing comment, include the `parent.id` field:
//
// ```
//
//	$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \
//	  -X POST -u evzijst \
//	  -H 'Content-Type: application/json' \
//	  -d '{"content": {"raw": "One more thing!"},
//	       "parent": {"id": 5728901}}'
//
// ```
func (s *Commits) PostRepositoriesWorkspaceRepoSlugCommitCommitComments(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugCommits - Identical to `GET /repositories/{workspace}/{repo_slug}/commits`,
// except that POST allows clients to place the include and exclude
// parameters in the request body to avoid URL length issues.
//
// **Note that this resource does NOT support new commit creation.**
func (s *Commits) PostRepositoriesWorkspaceRepoSlugCommits(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugCommitsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commits", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedChangeset
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedChangeset = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugCommitsRevision - Identical to `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`,
// except that POST allows clients to place the include and exclude
// parameters in the request body to avoid URL length issues.
//
// **Note that this resource does NOT support new commit creation.**
func (s *Commits) PostRepositoriesWorkspaceRepoSlugCommitsRevision(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest) (*operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commits/{revision}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedChangeset
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedChangeset = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}
