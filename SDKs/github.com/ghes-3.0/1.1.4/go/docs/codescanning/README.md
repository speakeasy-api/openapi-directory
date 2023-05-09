# CodeScanning

## Overview

Retrieve code scanning alerts from a repository.

### Available Operations

* [CodeScanningGetAlert](#codescanninggetalert) - Get a code scanning alert
* [CodeScanningListAlertsForRepo](#codescanninglistalertsforrepo) - List code scanning alerts for a repository
* [CodeScanningListRecentAnalyses](#codescanninglistrecentanalyses) - List code scanning analyses for a repository
* [CodeScanningUpdateAlert](#codescanningupdatealert) - Update a code scanning alert
* [CodeScanningUploadSarif](#codescanninguploadsarif) - Upload an analysis as SARIF data

## CodeScanningGetAlert

Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

**Deprecation notice**:
The instances field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The same information can now be retrieved via a GET request to the URL specified by `instances_url`.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#get-a-code-scanning-alert>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningGetAlert(ctx, operations.CodeScanningGetAlertRequest{
        AlertNumber: 848944,
        Owner: "sequi",
        Repo: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningAlert != nil {
        // handle response
    }
}
```

## CodeScanningListAlertsForRepo

Lists all open code scanning alerts for the default branch (usually `main`
or `master`). You must use an access token with the `security_events` scope to use
this endpoint. GitHub Apps must have the `security_events` read permission to use
this endpoint.

The response includes a `most_recent_instance` object.
This provides details of the most recent instance of this alert
for the default branch or for the specified Git reference
(if you used `ref` in the request).

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningListAlertsForRepo(ctx, operations.CodeScanningListAlertsForRepoRequest{
        Owner: "impedit",
        Page: sdk.Int64(13236),
        PerPage: sdk.Int64(974259),
        Ref: sdk.String("exercitationem"),
        Repo: "nulla",
        State: shared.CodeScanningAlertStateEnumOpen.ToPointer(),
        ToolGUID: sdk.String("porro"),
        ToolName: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningAlertItems != nil {
        // handle response
    }
}
```

## CodeScanningListRecentAnalyses

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
<https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningListRecentAnalyses(ctx, operations.CodeScanningListRecentAnalysesRequest{
        Owner: "doloribus",
        Page: sdk.Int64(478370),
        PerPage: sdk.Int64(753570),
        Ref: sdk.String("ducimus"),
        Repo: "alias",
        SarifID: sdk.String("6c81cd8e-b078-4ac3-a3be-1dad7dbd0b53"),
        ToolGUID: sdk.String("officia"),
        ToolName: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningAnalyses != nil {
        // handle response
    }
}
```

## CodeScanningUpdateAlert

Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#update-a-code-scanning-alert>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningUpdateAlert(ctx, operations.CodeScanningUpdateAlertRequest{
        RequestBody: operations.CodeScanningUpdateAlertRequestBody{
            DismissedReason: shared.CodeScanningAlertDismissedReasonEnumFalsePositive.ToPointer(),
            State: shared.CodeScanningAlertSetStateEnumOpen,
        },
        AlertNumber: 136900,
        Owner: "vel",
        Repo: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningAlert != nil {
        // handle response
    }
}
```

## CodeScanningUploadSarif

Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.

There are two places where you can upload code scanning results.
 - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."
 - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:

```
gzip -c analysis-data.sarif | base64 -w0
```

SARIF upload supports a maximum of 1000 results per analysis run. Any results over this limit are ignored. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.

The `202 Accepted`, response includes an `id` value.
You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#upload-a-sarif-file>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodeScanning.CodeScanningUploadSarif(ctx, operations.CodeScanningUploadSarifRequest{
        RequestBody: operations.CodeScanningUploadSarifRequestBody{
            CheckoutURI: sdk.String("file:///github/workspace/"),
            CommitSha: "magnam",
            Ref: "ratione",
            Sarif: "ex",
            StartedAt: types.MustTimeFromString("2022-10-04T22:05:21.038Z"),
            ToolName: sdk.String("dolor"),
        },
        Owner: "maiores",
        Repo: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeScanningSarifsReceipt != nil {
        // handle response
    }
}
```
