# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/migrationhubstrategy/2020-02-19/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetApplicationComponentDetailsRequest{
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
        ApplicationComponentID: "illum",
    }

    ctx := context.Background()
    res, err := s.GetApplicationComponentDetails(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationComponentDetailsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `GetApplicationComponentDetails` -  Retrieves details about an application component. 
* `GetApplicationComponentStrategies` -  Retrieves a list of all the recommended strategies and tools for an application component running on a server. 
* `GetAssessment` -  Retrieves the status of an on-going assessment. 
* `GetImportFileTask` -  Retrieves the details about a specific import task. 
* `GetLatestAssessmentID` - Retrieve the latest ID of a specific assessment task.
* `GetPortfolioPreferences` -  Retrieves your migration and modernization preferences. 
* `GetPortfolioSummary` -  Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns. 
* `GetRecommendationReportDetails` -  Retrieves detailed information about the specified recommendation report. 
* `GetServerDetails` -  Retrieves detailed information about a specified server. 
* `GetServerStrategies` -  Retrieves recommended strategies and tools for the specified server. 
* `ListApplicationComponents` -  Retrieves a list of all the application components (processes). 
* `ListCollectors` -  Retrieves a list of all the installed collectors. 
* `ListImportFileTask` -  Retrieves a list of all the imports performed. 
* `ListServers` -  Returns a list of all the servers. 
* `PutPortfolioPreferences` -  Saves the specified migration and modernization preferences. 
* `StartAssessment` -  Starts the assessment of an on-premises environment. 
* `StartImportFileTask` -  Starts a file import. 
* `StartRecommendationReportGeneration` -  Starts generating a recommendation report. 
* `StopAssessment` -  Stops the assessment of an on-premises environment. 
* `UpdateApplicationComponentConfig` -  Updates the configuration of an application component. 
* `UpdateServerConfig` -  Updates the configuration of the specified server. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
