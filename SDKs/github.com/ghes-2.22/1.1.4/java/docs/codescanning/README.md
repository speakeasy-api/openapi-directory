# codeScanning

## Overview

Retrieve code scanning alerts from a repository.

### Available Operations

* [codeScanningGetAlert](#codescanninggetalert) - Get a code scanning alert
* [codeScanningListAlertsForRepo](#codescanninglistalertsforrepo) - List code scanning alerts for a repository
* [codeScanningListRecentAnalyses](#codescanninglistrecentanalyses) - List code scanning analyses for a repository
* [codeScanningUpdateAlert](#codescanningupdatealert) - Update a code scanning alert
* [codeScanningUploadSarif](#codescanninguploadsarif) - Upload an analysis as SARIF data

## codeScanningGetAlert

Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

**Deprecation notice**:
The instances field is deprecated and will, in future, not be included in the response for this endpoint. From GitHub Enterprise Server 3.0, the same information can be retrieved via a GET request to the URL specified by `instances_url`, added in that release.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#get-a-code-scanning-alert>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningGetAlertRequest;
import org.openapis.openapi.models.operations.CodeScanningGetAlertResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningGetAlertRequest req = new CodeScanningGetAlertRequest(213312L, "sapiente", "totam");            

            CodeScanningGetAlertResponse res = sdk.codeScanning.codeScanningGetAlert(req);

            if (res.codeScanningAlert != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codeScanningListAlertsForRepo

Lists all open code scanning alerts for the default branch (usually `main`
or `master`). You must use an access token with the `security_events` scope to use
this endpoint. GitHub Apps must have the `security_events` read permission to use
this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningListAlertsForRepoRequest;
import org.openapis.openapi.models.operations.CodeScanningListAlertsForRepoResponse;
import org.openapis.openapi.models.shared.CodeScanningAlertStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningListAlertsForRepoRequest req = new CodeScanningListAlertsForRepoRequest("nihil", "sit") {{
                page = 711584L;
                perPage = 207470L;
                ref = "sed";
                state = CodeScanningAlertStateEnum.CLOSED;
                toolGuid = "libero";
                toolName = "voluptas";
            }};            

            CodeScanningListAlertsForRepoResponse res = sdk.codeScanning.codeScanningListAlertsForRepo(req);

            if (res.codeScanningAlertItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codeScanningListRecentAnalyses

Lists the details of all code scanning analyses for a repository,
starting with the most recent.
The response is paginated and you can use the `page` and `per_page` parameters
to list the analyses you're interested in.
By default 30 analyses are listed per page.

The `rules_count` field in the response give the number of rules
that were run in the analysis.
For very old analyses this data is not available,
and `0` is returned in this field.

You must use an access token with the `security_events` scope to use this endpoint.
GitHub Apps must have the `security_events` read permission to use this endpoint.

**Deprecation notice**:
The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningListRecentAnalysesRequest;
import org.openapis.openapi.models.operations.CodeScanningListRecentAnalysesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningListRecentAnalysesRequest req = new CodeScanningListRecentAnalysesRequest("deserunt", "quam") {{
                page = 214880L;
                perPage = 277628L;
                ref = "qui";
                sarifId = "6c81cd8e-b078-4ac3-a3be-1dad7dbd0b53";
                toolGuid = "cupiditate";
                toolName = "maxime";
            }};            

            CodeScanningListRecentAnalysesResponse res = sdk.codeScanning.codeScanningListRecentAnalyses(req);

            if (res.codeScanningAnalyses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codeScanningUpdateAlert

Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#update-a-code-scanning-alert>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningUpdateAlertRequest;
import org.openapis.openapi.models.operations.CodeScanningUpdateAlertRequestBody;
import org.openapis.openapi.models.operations.CodeScanningUpdateAlertResponse;
import org.openapis.openapi.models.shared.CodeScanningAlertDismissedReasonEnum;
import org.openapis.openapi.models.shared.CodeScanningAlertSetStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningUpdateAlertRequest req = new CodeScanningUpdateAlertRequest(                new CodeScanningUpdateAlertRequestBody(CodeScanningAlertSetStateEnum.DISMISSED) {{
                                dismissedReason = CodeScanningAlertDismissedReasonEnum.WON_T_FIX;
                            }};, 117531L, "laborum", "totam");            

            CodeScanningUpdateAlertResponse res = sdk.codeScanning.codeScanningUpdateAlert(req);

            if (res.codeScanningAlert != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## codeScanningUploadSarif

Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.

There are two places where you can upload code scanning results.
 - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)."
 - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:

```
gzip -c analysis-data.sarif | base64 -w0
```

SARIF upload supports a maximum of 1000 results per analysis run. Any results over this limit are ignored. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.

The `202 Accepted`, response includes an `id` value.
You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."

API method documentation
<https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#upload-a-sarif-file>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CodeScanningUploadSarifRequest;
import org.openapis.openapi.models.operations.CodeScanningUploadSarifRequestBody;
import org.openapis.openapi.models.operations.CodeScanningUploadSarifResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CodeScanningUploadSarifRequest req = new CodeScanningUploadSarifRequest(                new CodeScanningUploadSarifRequestBody("incidunt", "aspernatur", "dolores") {{
                                checkoutUri = "file:///github/workspace/";
                                startedAt = OffsetDateTime.parse("2021-08-04T17:36:39.068Z");
                                toolName = "aliquid";
                            }};, "quam", "molestias");            

            CodeScanningUploadSarifResponse res = sdk.codeScanning.codeScanningUploadSarif(req);

            if (res.codeScanningSarifsReceipt != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
