package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Reports {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Reports(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
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
	
}