import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Commits {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
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
  bulkCreateOrUpdateAnnotations(
    req: operations.BulkCreateOrUpdateAnnotationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BulkCreateOrUpdateAnnotationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BulkCreateOrUpdateAnnotationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BulkCreateOrUpdateAnnotationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.reportAnnotations = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
  createOrUpdateAnnotation(
    req: operations.CreateOrUpdateAnnotationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrUpdateAnnotationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrUpdateAnnotationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateOrUpdateAnnotationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.reportAnnotation = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
  createOrUpdateReport(
    req: operations.CreateOrUpdateReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrUpdateReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrUpdateReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateOrUpdateReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteAnnotation - Deletes a single Annotation matching the provided ID.
  **/
  deleteAnnotation(
    req: operations.DeleteAnnotationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAnnotationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAnnotationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAnnotationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteReport - Deletes a single Report matching the provided ID.
  **/
  deleteReport(
    req: operations.DeleteReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove - Redact the authenticated user's approval of the specified commit.
   * 
   * This operation is only available to users that have explicit access to
   * the repository. In contrast, just the fact that a repository is
   * publicly accessible to users does not give them the ability to approve
   * commits.
  **/
  deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAnnotation - Returns a single Annotation matching the provided ID.
  **/
  getAnnotation(
    req: operations.GetAnnotationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnnotationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnnotationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAnnotationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.reportAnnotation = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAnnotationsForReport - Returns a paginated list of Annotations for a specified report.
  **/
  getAnnotationsForReport(
    req: operations.GetAnnotationsForReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnnotationsForReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnnotationsForReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAnnotationsForReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedAnnotations = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getReport - Returns a single Report matching the provided ID.
  **/
  getReport(
    req: operations.GetReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getReportsForCommit - Returns a paginated list of Reports linked to this commit.
  **/
  getReportsForCommit(
    req: operations.GetReportsForCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReportsForCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReportsForCommitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/reports", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReportsForCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedReports = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
  getRepositoriesWorkspaceRepoSlugCommitCommit(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.commit = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRepositoriesWorkspaceRepoSlugCommitCommitComments - Returns the commit's comments.
   * 
   * This includes both global and inline comments.
   * 
   * The default sorting is oldest to newest and can be overridden with
   * the `sort` query parameter.
  **/
  getRepositoriesWorkspaceRepoSlugCommitCommitComments(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedCommitComments = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId - Returns the specified commit comment.
  **/
  getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.commitComment = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
  getRepositoriesWorkspaceRepoSlugCommits(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commits", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedChangeset = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
  getRepositoriesWorkspaceRepoSlugCommitsRevision(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commits/{revision}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedChangeset = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
  getRepositoriesWorkspaceRepoSlugDiffSpec(
    req: operations.GetRepositoriesWorkspaceRepoSlugDiffSpecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugDiffSpecRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/diff/{spec}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 555:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
  getRepositoriesWorkspaceRepoSlugDiffstatSpec(
    req: operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/diffstat/{spec}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedDiffstats = httpRes?.data;
            }
            break;
          case httpRes?.status == 555:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getRepositoriesWorkspaceRepoSlugMergeBaseRevspec - Returns the best common ancestor between two commits, specified in a revspec
   * of 2 commits (e.g. 3a8b42..9ff173).
   * 
   * If more than one best common ancestor exists, only one will be returned. It is
   * unspecified which will be returned.
  **/
  getRepositoriesWorkspaceRepoSlugMergeBaseRevspec(
    req: operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/merge-base/{revspec}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.commit = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
  getRepositoriesWorkspaceRepoSlugPatchSpec(
    req: operations.GetRepositoriesWorkspaceRepoSlugPatchSpecRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPatchSpecRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/patch/{spec}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 555:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRepositoriesWorkspaceRepoSlugCommitCommitApprove - Approve the specified commit as the authenticated user.
   * 
   * This operation is only available to users that have explicit access to
   * the repository. In contrast, just the fact that a repository is
   * publicly accessible to users does not give them the ability to approve
   * commits.
  **/
  postRepositoriesWorkspaceRepoSlugCommitCommitApprove(
    req: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/approve", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.participant = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
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
  postRepositoriesWorkspaceRepoSlugCommitCommitComments(
    req: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/comments", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * postRepositoriesWorkspaceRepoSlugCommits - Identical to `GET /repositories/{workspace}/{repo_slug}/commits`,
   * except that POST allows clients to place the include and exclude
   * parameters in the request body to avoid URL length issues.
   * 
   * **Note that this resource does NOT support new commit creation.**
  **/
  postRepositoriesWorkspaceRepoSlugCommits(
    req: operations.PostRepositoriesWorkspaceRepoSlugCommitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugCommitsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commits", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedChangeset = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postRepositoriesWorkspaceRepoSlugCommitsRevision - Identical to `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`,
   * except that POST allows clients to place the include and exclude
   * parameters in the request body to avoid URL length issues.
   * 
   * **Note that this resource does NOT support new commit creation.**
  **/
  postRepositoriesWorkspaceRepoSlugCommitsRevision(
    req: operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commits/{revision}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedChangeset = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
