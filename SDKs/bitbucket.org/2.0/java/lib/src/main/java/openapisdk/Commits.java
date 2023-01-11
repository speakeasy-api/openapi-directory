package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Commits {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Commits(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * bulkCreateOrUpdateAnnotations - Bulk upload of annotations.
     * Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
     * 
     * Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.
     * 
     * ### Sample cURL request:
     * ```
     * curl --location 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001/annotations' \
     * --header 'Content-Type: application/json' \
     * --data-raw '[
     *   {
     *         "external_id": "mysystem-annotation001",
     *         "title": "Security scan report",
     *         "annotation_type": "VULNERABILITY",
     *         "summary": "This line represents a security threat.",
     *         "severity": "HIGH",
     *       "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
     *         "line": 42
     *   },
     *   {
     *         "external_id": "mySystem-annotation002",
     *         "title": "Bug report",
     *         "annotation_type": "BUG",
     *         "result": "FAILED",
     *         "summary": "This line might introduce a bug.",
     *         "severity": "MEDIUM",
     *       "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java",
     *         "line": 13
     *   }
     * ]'
     * ```
     * 
     * ### Possible field values:
     * annotation_type: VULNERABILITY, CODE_SMELL, BUG
     * result: PASSED, FAILED, IGNORED, SKIPPED
     * severity: HIGH, MEDIUM, LOW, CRITICAL
     * 
     * Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
     * 
    **/
    public openapisdk.models.operations.BulkCreateOrUpdateAnnotationsResponse bulkCreateOrUpdateAnnotations(openapisdk.models.operations.BulkCreateOrUpdateAnnotationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BulkCreateOrUpdateAnnotationsResponse res = new openapisdk.models.operations.BulkCreateOrUpdateAnnotationsResponse() {{
            reportAnnotations = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object>[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map[].class);
                res.reportAnnotations = out;
            }
        }

        return res;
    }
	
	
    /**
     * createOrUpdateAnnotation - Creates or updates an individual annotation for the specified report.
     * Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
     * 
     * Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.
     * 
     * ### Sample cURL request:
     * ```
     * curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mySystem-001/annotations/mysystem-annotation001' \
     * --header 'Content-Type: application/json' \
     * --data-raw '{
     *     "title": "Security scan report",
     *     "annotation_type": "VULNERABILITY",
     *     "summary": "This line represents a security thread.",
     *     "severity": "HIGH",
     *     "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
     *     "line": 42
     * }'
     * ```
     * 
     * ### Possible field values:
     * annotation_type: VULNERABILITY, CODE_SMELL, BUG
     * result: PASSED, FAILED, IGNORED, SKIPPED
     * severity: HIGH, MEDIUM, LOW, CRITICAL
     * 
     * Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
     * 
    **/
    public openapisdk.models.operations.CreateOrUpdateAnnotationResponse createOrUpdateAnnotation(openapisdk.models.operations.CreateOrUpdateAnnotationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateOrUpdateAnnotationResponse res = new openapisdk.models.operations.CreateOrUpdateAnnotationResponse() {{
            reportAnnotation = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.reportAnnotation = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * createOrUpdateReport - Creates or updates a report for the specified commit.
     * To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.
     * 
     * ### Sample cURL request:
     * ```
     * curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001' \
     * --header 'Content-Type: application/json' \
     * --data-raw '{
     *     "title": "Security scan report",
     *     "details": "This pull request introduces 10 new dependency vulnerabilities.",
     *     "report_type": "SECURITY",
     *     "reporter": "mySystem",
     *     "link": "http://www.mysystem.com/reports/001",
     *     "result": "FAILED",
     *     "data": [
     *         {
     *             "title": "Duration (seconds)",
     *             "type": "DURATION",
     *             "value": 14
     *         },
     *         {
     *             "title": "Safe to merge?",
     *             "type": "BOOLEAN",
     *             "value": false
     *         }
     *     ]
     * }'
     * ```
     * 
     * ### Possible field values:
     * report_type: SECURITY, COVERAGE, TEST, BUG
     * result: PASSED, FAILED, PENDING
     * data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT
     * 
     * #### Data field formats
     * | Type  Field   | Value Field Type  | Value Field Display |
     * |:--------------|:------------------|:--------------------|
     * | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
     * | BOOLEAN	| Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
     * | DATE  | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise  it will be displayed as an absolute date. |
     * | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
     * | LINK | Object: `{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}` | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. |
     * | NUMBER | Number | The value will be read as a JSON number and large numbers will be  displayed in a human readable format (e.g. 14.3k). |
     * | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
     * | TEXT | String | The value will be read as a JSON string and will be displayed as-is |
     * 
     * Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
     * 
    **/
    public openapisdk.models.operations.CreateOrUpdateReportResponse createOrUpdateReport(openapisdk.models.operations.CreateOrUpdateReportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateOrUpdateReportResponse res = new openapisdk.models.operations.CreateOrUpdateReportResponse() {{
            report = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.report = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteAnnotation - Deletes a single Annotation matching the provided ID.
    **/
    public openapisdk.models.operations.DeleteAnnotationResponse deleteAnnotation(openapisdk.models.operations.DeleteAnnotationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteAnnotationResponse res = new openapisdk.models.operations.DeleteAnnotationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteReport - Deletes a single Report matching the provided ID.
    **/
    public openapisdk.models.operations.DeleteReportResponse deleteReport(openapisdk.models.operations.DeleteReportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteReportResponse res = new openapisdk.models.operations.DeleteReportResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove - Redact the authenticated user's approval of the specified commit.
     * 
     * This operation is only available to users that have explicit access to
     * the repository. In contrast, just the fact that a repository is
     * publicly accessible to users does not give them the ability to approve
     * commits.
    **/
    public openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove(openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse res = new openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAnnotation - Returns a single Annotation matching the provided ID.
    **/
    public openapisdk.models.operations.GetAnnotationResponse getAnnotation(openapisdk.models.operations.GetAnnotationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAnnotationResponse res = new openapisdk.models.operations.GetAnnotationResponse() {{
            reportAnnotation = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.reportAnnotation = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAnnotationsForReport - Returns a paginated list of Annotations for a specified report.
    **/
    public openapisdk.models.operations.GetAnnotationsForReportResponse getAnnotationsForReport(openapisdk.models.operations.GetAnnotationsForReportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAnnotationsForReportResponse res = new openapisdk.models.operations.GetAnnotationsForReportResponse() {{
            paginatedAnnotations = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedAnnotations out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedAnnotations.class);
                res.paginatedAnnotations = out;
            }
        }

        return res;
    }
	
	
    /**
     * getReport - Returns a single Report matching the provided ID.
    **/
    public openapisdk.models.operations.GetReportResponse getReport(openapisdk.models.operations.GetReportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetReportResponse res = new openapisdk.models.operations.GetReportResponse() {{
            report = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.report = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getReportsForCommit - Returns a paginated list of Reports linked to this commit.
    **/
    public openapisdk.models.operations.GetReportsForCommitResponse getReportsForCommit(openapisdk.models.operations.GetReportsForCommitRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetReportsForCommitResponse res = new openapisdk.models.operations.GetReportsForCommitResponse() {{
            paginatedReports = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedReports out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedReports.class);
                res.paginatedReports = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugCommitCommit - Returns the specified commit.
     * 
     * Example:
     * 
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a1
     * {
     *     "rendered": {
     *         "message": {
     *         "raw": "Add a GEORDI_OUTPUT_DIR setting",
     *         "markup": "markdown",
     *         "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
     *         "type": "rendered"
     *         }
     *     },
     *     "hash": "f7591a13eda445d9a9167f98eb870319f4b6c2d8",
     *     "repository": {
     *         "name": "geordi",
     *         "type": "repository",
     *         "full_name": "bitbucket/geordi",
     *         "links": {
     *             "self": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi"
     *             },
     *             "html": {
     *                 "href": "https://bitbucket.org/bitbucket/geordi"
     *             },
     *             "avatar": {
     *                 "href": "https://bytebucket.org/ravatar/%7B85d08b4e-571d-44e9-a507-fa476535aa98%7D?ts=1730260"
     *             }
     *         },
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *     },
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
     *         },
     *         "comments": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/comments"
     *         },
     *         "patch": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/patch/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
     *         },
     *         "html": {
     *             "href": "https://bitbucket.org/bitbucket/geordi/commits/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
     *         },
     *         "diff": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diff/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
     *         },
     *         "approve": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/approve"
     *         },
     *         "statuses": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/statuses"
     *         }
     *     },
     *     "author": {
     *         "raw": "Brodie Rao <a@b.c>",
     *         "type": "author",
     *         "user": {
     *             "display_name": "Brodie Rao",
     *             "uuid": "{9484702e-c663-4afd-aefb-c93a8cd31c28}",
     *             "links": {
     *                 "self": {
     *                     "href": "https://api.bitbucket.org/2.0/users/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D"
     *                 },
     *                 "html": {
     *                     "href": "https://bitbucket.org/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D/"
     *                 },
     *                 "avatar": {
     *                     "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca/613070db-28b0-421f-8dba-ae8a87e2a5c7/128"
     *                 }
     *             },
     *             "type": "user",
     *             "nickname": "brodie",
     *             "account_id": "557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca"
     *         }
     *     },
     *     "summary": {
     *         "raw": "Add a GEORDI_OUTPUT_DIR setting",
     *         "markup": "markdown",
     *         "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
     *         "type": "rendered"
     *     },
     *     "participants": [],
     *     "parents": [
     *         {
     *             "type": "commit",
     *             "hash": "f06941fec4ef6bcb0c2456927a0cf258fa4f899b",
     *             "links": {
     *                 "self": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
     *                 },
     *                 "html": {
     *                     "href": "https://bitbucket.org/bitbucket/geordi/commits/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
     *                 }
     *             }
     *         }
     *     ],
     *     "date": "2012-07-16T19:37:54+00:00",
     *     "message": "Add a GEORDI_OUTPUT_DIR setting",
     *     "type": "commit"
     * }
     * ```
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse getRepositoriesWorkspaceRepoSlugCommitCommit(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse() {{
            commit = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.commit = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugCommitCommitComments - Returns the commit's comments.
     * 
     * This includes both global and inline comments.
     * 
     * The default sorting is oldest to newest and can be overridden with
     * the `sort` query parameter.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse getRepositoriesWorkspaceRepoSlugCommitCommitComments(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse() {{
            paginatedCommitComments = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedCommitComments out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedCommitComments.class);
                res.paginatedCommitComments = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId - Returns the specified commit comment.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse() {{
            commitComment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.commitComment = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugCommits - These are the repository's commits. They are paginated and returned
     * in reverse chronological order, similar to the output of `git log`.
     * Like these tools, the DAG can be filtered.
     * 
     * ## GET /repositories/{workspace}/{repo_slug}/commits/
     * 
     * Returns all commits in the repo in topological order (newest commit
     * first). All branches and tags are included (similar to
     * `git log --all`).
     * 
     * ## GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master
     * 
     * Returns all commits in the repo that are not on master
     * (similar to `git log --all ^master`).
     * 
     * ## GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar
     * 
     * Returns all commits that are on refs `foo` or `bar`, but not on `fu` or
     * `fubar` (similar to `git log foo bar ^fu ^fubar`).
     * 
     * An optional `path` parameter can be specified that will limit the
     * results to commits that affect that path. `path` can either be a file
     * or a directory. If a directory is specified, commits are returned that
     * have modified any file in the directory tree rooted by `path`. It is
     * important to note that if the `path` parameter is specified, the commits
     * returned by this endpoint may no longer be a DAG, parent commits that
     * do not modify the path will be omitted from the response.
     * 
     * ## GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master
     * 
     * Returns all commits that are on refs `foo` or `bar`, but not on `master`
     * that changed the file README.md.
     * 
     * ## GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master
     * 
     * Returns all commits that are on refs `foo` or `bar`, but not on `master`
     * that changed to a file in any file in the directory src or its children.
     * 
     * Because the response could include a very large number of commits, it
     * is paginated. Follow the 'next' link in the response to navigate to the
     * next page of commits. As with other paginated resources, do not
     * construct your own links.
     * 
     * When the include and exclude parameters are more than can fit in a
     * query string, clients can use a `x-www-form-urlencoded` POST instead.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse getRepositoriesWorkspaceRepoSlugCommits(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commits", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse() {{
            paginatedChangeset = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedChangeset out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedChangeset.class);
                res.paginatedChangeset = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugCommitsRevision - These are the repository's commits. They are paginated and returned
     * in reverse chronological order, similar to the output of `git log`.
     * Like these tools, the DAG can be filtered.
     * 
     * ## GET /repositories/{workspace}/{repo_slug}/commits/master
     * 
     * Returns all commits on rev `master` (similar to `git log master`).
     * 
     * ## GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master
     * 
     * Returns all commits on ref `dev` or `foo`, except those that are reachable on
     * `master` (similar to `git log dev foo ^master`).
     * 
     * An optional `path` parameter can be specified that will limit the
     * results to commits that affect that path. `path` can either be a file
     * or a directory. If a directory is specified, commits are returned that
     * have modified any file in the directory tree rooted by `path`. It is
     * important to note that if the `path` parameter is specified, the commits
     * returned by this endpoint may no longer be a DAG, parent commits that
     * do not modify the path will be omitted from the response.
     * 
     * ## GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master
     * 
     * Returns all commits that are on refs `dev` or `foo` or `bar`, but not on `master`
     * that changed the file README.md.
     * 
     * ## GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master
     * 
     * Returns all commits that are on refs `dev` or `foo`, but not on `master`
     * that changed to a file in any file in the directory src or its children.
     * 
     * Because the response could include a very large number of commits, it
     * is paginated. Follow the 'next' link in the response to navigate to the
     * next page of commits. As with other paginated resources, do not
     * construct your own links.
     * 
     * When the include and exclude parameters are more than can fit in a
     * query string, clients can use a `x-www-form-urlencoded` POST instead.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse getRepositoriesWorkspaceRepoSlugCommitsRevision(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commits/{revision}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse() {{
            paginatedChangeset = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedChangeset out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedChangeset.class);
                res.paginatedChangeset = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugDiffSpec - Produces a raw git-style diff.
     * 
     * #### Single commit spec
     * 
     * If the `spec` argument to this API is a single commit, the diff is
     * produced against the first parent of the specified commit.
     * 
     * #### Two commit spec
     * 
     * Two commits separated by `..` may be provided as the `spec`, e.g.,
     * `3a8b42..9ff173`. When two commits are provided and the `merge` query
     * parameter is true or absent, this API produces a 3-way diff, also
     * referred to as a merge diff. This is equivalent to merging the left
     * branch into the right branch and then computing the diff of the merge
     * commit against its first parent (the right branch). These diffs have
     * the same behavior as pull requests that show the 3-way diff, such as
     * the [Bitbucket Cloud Pull
     * Request](https://blog.developer.atlassian.com/a-better-pull-request/).
     * For a simple git-style diff, add `merge=false` to the query.
     * 
     * The two commits are interpreted as follows:
     * 
     * * First commit: the commit containing the changes we wish to preview
     * * Second commit: the commit representing the state to which we want to
     *   compare the first commit
     * * **Note**: This is the opposite of the order used in `git diff`.
     * 
     * #### Comparison to patches
     * 
     * While similar to patches, diffs:
     * 
     * * Don't have a commit header (username, commit message, etc)
     * * Support the optional `path=foo/bar.py` query param to filter
     *   the diff to just that one file diff
     * 
     * #### Response
     * 
     * The raw diff is returned as-is, in whatever encoding the files in the
     * repository use. It is not decoded into unicode. As such, the
     * content-type is `text/plain`.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse getRepositoriesWorkspaceRepoSlugDiffSpec(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDiffSpecRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/diff/{spec}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 555) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugDiffstatSpec - Produces a response in JSON format with a record for every path
     * modified, including information on the type of the change and the
     * number of lines added and removed.
     * 
     * #### Single commit spec
     * 
     * If the `spec` argument to this API is a single commit, the diff is
     * produced against the first parent of the specified commit.
     * 
     * #### Two commit spec
     * 
     * Two commits separated by `..` may be provided as the `spec`, e.g.,
     * `3a8b42..9ff173`. When two commits are provided and the `merge` query
     * parameter is true or absent, this API produces a 3-way diff, also
     * referred to as a merge diff. This is equivalent to merging the left
     * branch into the right branch and then computing the diff of the merge
     * commit against its first parent (the right branch). These diffs have
     * the same behavior as pull requests that show the 3-way diff, such as
     * the [Bitbucket Cloud Pull
     * Request](https://blog.developer.atlassian.com/a-better-pull-request/).
     * For a simple git-style diff, add `merge=false` to the query.
     * 
     * The two commits are interpreted as follows:
     * 
     * * First commit: the commit containing the changes we wish to preview
     * * Second commit: the commit representing the state to which we want to
     *   compare the first commit
     * * **Note**: This is the opposite of the order used in `git diff`.
     * 
     * #### Sample output
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diffstat/d222fa2..e174964
     * {
     *     "pagelen": 500,
     *     "values": [
     *         {
     *             "type": "diffstat",
     *             "status": "modified",
     *             "lines_removed": 1,
     *             "lines_added": 2,
     *             "old": {
     *                 "path": "setup.py",
     *                 "escaped_path": "setup.py",
     *                 "type": "commit_file",
     *                 "links": {
     *                     "self": {
     *                         "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/e1749643d655d7c7014001a6c0f58abaf42ad850/setup.py"
     *                     }
     *                 }
     *             },
     *             "new": {
     *                 "path": "setup.py",
     *                 "escaped_path": "setup.py",
     *                 "type": "commit_file",
     *                 "links": {
     *                     "self": {
     *                         "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/d222fa235229c55dad20b190b0b571adf737d5a6/setup.py"
     *                     }
     *                 }
     *             }
     *         }
     *     ],
     *     "page": 1,
     *     "size": 1
     * }
     * ```
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse getRepositoriesWorkspaceRepoSlugDiffstatSpec(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/diffstat/{spec}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse() {{
            paginatedDiffstats = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedDiffstats out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedDiffstats.class);
                res.paginatedDiffstats = out;
            }
        }
        else if (httpRes.statusCode() == 555) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugMergeBaseRevspec - Returns the best common ancestor between two commits, specified in a revspec
     * of 2 commits (e.g. 3a8b42..9ff173).
     * 
     * If more than one best common ancestor exists, only one will be returned. It is
     * unspecified which will be returned.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse getRepositoriesWorkspaceRepoSlugMergeBaseRevspec(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/merge-base/{revspec}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse() {{
            commit = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.commit = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugPatchSpec - Produces a raw patch for a single commit (diffed against its first
     * parent), or a patch-series for a revspec of 2 commits (e.g.
     * `3a8b42..9ff173` where the first commit represents the source and the
     * second commit the destination).
     * 
     * In case of the latter (diffing a revspec), a patch series is returned
     * for the commits on the source branch (`3a8b42` and its ancestors in
     * our example). For Mercurial, a single patch is returned that combines
     * the changes of all commits on the source branch.
     * 
     * While similar to diffs, patches:
     * 
     * * Have a commit header (username, commit message, etc)
     * * Do not support the `path=foo/bar.py` query parameter
     * 
     * The raw patch is returned as-is, in whatever encoding the files in the
     * repository use. It is not decoded into unicode. As such, the
     * content-type is `text/plain`.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse getRepositoriesWorkspaceRepoSlugPatchSpec(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPatchSpecRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/patch/{spec}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 555) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * postRepositoriesWorkspaceRepoSlugCommitCommitApprove - Approve the specified commit as the authenticated user.
     * 
     * This operation is only available to users that have explicit access to
     * the repository. In contrast, just the fact that a repository is
     * publicly accessible to users does not give them the ability to approve
     * commits.
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse postRepositoriesWorkspaceRepoSlugCommitCommitApprove(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse() {{
            participant = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.participant = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * postRepositoriesWorkspaceRepoSlugCommitCommitComments - Creates new comment on the specified commit.
     * 
     * To post a reply to an existing comment, include the `parent.id` field:
     * 
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \
     *   -X POST -u evzijst \
     *   -H 'Content-Type: application/json' \
     *   -d '{"content": {"raw": "One more thing!"},
     *        "parent": {"id": 5728901}}'
     * ```
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse postRepositoriesWorkspaceRepoSlugCommitCommitComments(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * postRepositoriesWorkspaceRepoSlugCommits - Identical to `GET /repositories/{workspace}/{repo_slug}/commits`,
     * except that POST allows clients to place the include and exclude
     * parameters in the request body to avoid URL length issues.
     * 
     * **Note that this resource does NOT support new commit creation.**
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse postRepositoriesWorkspaceRepoSlugCommits(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commits", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse() {{
            paginatedChangeset = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedChangeset out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedChangeset.class);
                res.paginatedChangeset = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * postRepositoriesWorkspaceRepoSlugCommitsRevision - Identical to `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`,
     * except that POST allows clients to place the include and exclude
     * parameters in the request body to avoid URL length issues.
     * 
     * **Note that this resource does NOT support new commit creation.**
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse postRepositoriesWorkspaceRepoSlugCommitsRevision(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commits/{revision}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse() {{
            paginatedChangeset = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedChangeset out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedChangeset.class);
                res.paginatedChangeset = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
}