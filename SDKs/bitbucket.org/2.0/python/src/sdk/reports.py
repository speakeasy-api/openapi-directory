import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Reports:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def bulk_create_or_update_annotations(self, request: operations.BulkCreateOrUpdateAnnotationsRequest) -> operations.BulkCreateOrUpdateAnnotationsResponse:
        r"""Bulk upload of annotations.
        Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
        
        Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.
        
        ### Sample cURL request:
        ```
        curl --location 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001/annotations' \
        --header 'Content-Type: application/json' \
        --data-raw '[
          {
                \"external_id\": \"mysystem-annotation001\",
                \"title\": \"Security scan report\",
                \"annotation_type\": \"VULNERABILITY\",
                \"summary\": \"This line represents a security threat.\",
                \"severity\": \"HIGH\",
              \"path\": \"my-service/src/main/java/com/myCompany/mysystem/logic/Main.java\",
                \"line\": 42
          },
          {
                \"external_id\": \"mySystem-annotation002\",
                \"title\": \"Bug report\",
                \"annotation_type\": \"BUG\",
                \"result\": \"FAILED\",
                \"summary\": \"This line might introduce a bug.\",
                \"severity\": \"MEDIUM\",
              \"path\": \"my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java\",
                \"line\": 13
          }
        ]'
        ```
        
        ### Possible field values:
        annotation_type: VULNERABILITY, CODE_SMELL, BUG
        result: PASSED, FAILED, IGNORED, SKIPPED
        severity: HIGH, MEDIUM, LOW, CRITICAL
        
        Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BulkCreateOrUpdateAnnotationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[dict[str, Any]]])
                res.report_annotations = out

        return res

    
    def create_or_update_annotation(self, request: operations.CreateOrUpdateAnnotationRequest) -> operations.CreateOrUpdateAnnotationResponse:
        r"""Creates or updates an individual annotation for the specified report.
        Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
        
        Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.
        
        ### Sample cURL request:
        ```
        curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mySystem-001/annotations/mysystem-annotation001' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            \"title\": \"Security scan report\",
            \"annotation_type\": \"VULNERABILITY\",
            \"summary\": \"This line represents a security thread.\",
            \"severity\": \"HIGH\",
            \"path\": \"my-service/src/main/java/com/myCompany/mysystem/logic/Main.java\",
            \"line\": 42
        }'
        ```
        
        ### Possible field values:
        annotation_type: VULNERABILITY, CODE_SMELL, BUG
        result: PASSED, FAILED, IGNORED, SKIPPED
        severity: HIGH, MEDIUM, LOW, CRITICAL
        
        Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrUpdateAnnotationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.report_annotation = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def create_or_update_report(self, request: operations.CreateOrUpdateReportRequest) -> operations.CreateOrUpdateReportResponse:
        r"""Creates or updates a report for the specified commit.
        To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.
        
        ### Sample cURL request:
        ```
        curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            \"title\": \"Security scan report\",
            \"details\": \"This pull request introduces 10 new dependency vulnerabilities.\",
            \"report_type\": \"SECURITY\",
            \"reporter\": \"mySystem\",
            \"link\": \"http://www.mysystem.com/reports/001\",
            \"result\": \"FAILED\",
            \"data\": [
                {
                    \"title\": \"Duration (seconds)\",
                    \"type\": \"DURATION\",
                    \"value\": 14
                },
                {
                    \"title\": \"Safe to merge?\",
                    \"type\": \"BOOLEAN\",
                    \"value\": false
                }
            ]
        }'
        ```
        
        ### Possible field values:
        report_type: SECURITY, COVERAGE, TEST, BUG
        result: PASSED, FAILED, PENDING
        data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT
        
        #### Data field formats
        | Type  Field   | Value Field Type  | Value Field Display |
        |:--------------|:------------------|:--------------------|
        | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
        | BOOLEAN	| Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
        | DATE  | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise  it will be displayed as an absolute date. |
        | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
        | LINK | Object: `{\"text\": \"Link text here\", \"href\": \"https://link.to.annotation/in/external/tool\"}` | The value will be read as a JSON object containing the fields \"text\" and \"href\" and will be displayed as a clickable link on the report. |
        | NUMBER | Number | The value will be read as a JSON number and large numbers will be  displayed in a human readable format (e.g. 14.3k). |
        | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
        | TEXT | String | The value will be read as a JSON string and will be displayed as-is |
        
        Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrUpdateReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.report = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_annotation(self, request: operations.DeleteAnnotationRequest) -> operations.DeleteAnnotationResponse:
        r"""Deletes a single Annotation matching the provided ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAnnotationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_report(self, request: operations.DeleteReportRequest) -> operations.DeleteReportResponse:
        r"""Deletes a single Report matching the provided ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_annotation(self, request: operations.GetAnnotationRequest) -> operations.GetAnnotationResponse:
        r"""Returns a single Annotation matching the provided ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.report_annotation = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_annotations_for_report(self, request: operations.GetAnnotationsForReportRequest) -> operations.GetAnnotationsForReportResponse:
        r"""Returns a paginated list of Annotations for a specified report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationsForReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedAnnotations])
                res.paginated_annotations = out

        return res

    
    def get_report(self, request: operations.GetReportRequest) -> operations.GetReportResponse:
        r"""Returns a single Report matching the provided ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.report = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_reports_for_commit(self, request: operations.GetReportsForCommitRequest) -> operations.GetReportsForCommitResponse:
        r"""Returns a paginated list of Reports linked to this commit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportsForCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedReports])
                res.paginated_reports = out

        return res

    