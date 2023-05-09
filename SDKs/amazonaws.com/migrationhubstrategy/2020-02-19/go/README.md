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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GetApplicationComponentDetails(ctx, operations.GetApplicationComponentDetailsRequest{
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        ApplicationComponentID: "illum",
    })
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

### [SDK](docs/sdk/README.md)

* [GetApplicationComponentDetails](docs/sdk/README.md#getapplicationcomponentdetails) -  Retrieves details about an application component. 
* [GetApplicationComponentStrategies](docs/sdk/README.md#getapplicationcomponentstrategies) -  Retrieves a list of all the recommended strategies and tools for an application component running on a server. 
* [GetAssessment](docs/sdk/README.md#getassessment) -  Retrieves the status of an on-going assessment. 
* [GetImportFileTask](docs/sdk/README.md#getimportfiletask) -  Retrieves the details about a specific import task. 
* [GetLatestAssessmentID](docs/sdk/README.md#getlatestassessmentid) - Retrieve the latest ID of a specific assessment task.
* [GetPortfolioPreferences](docs/sdk/README.md#getportfoliopreferences) -  Retrieves your migration and modernization preferences. 
* [GetPortfolioSummary](docs/sdk/README.md#getportfoliosummary) -  Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns. 
* [GetRecommendationReportDetails](docs/sdk/README.md#getrecommendationreportdetails) -  Retrieves detailed information about the specified recommendation report. 
* [GetServerDetails](docs/sdk/README.md#getserverdetails) -  Retrieves detailed information about a specified server. 
* [GetServerStrategies](docs/sdk/README.md#getserverstrategies) -  Retrieves recommended strategies and tools for the specified server. 
* [ListApplicationComponents](docs/sdk/README.md#listapplicationcomponents) -  Retrieves a list of all the application components (processes). 
* [ListCollectors](docs/sdk/README.md#listcollectors) -  Retrieves a list of all the installed collectors. 
* [ListImportFileTask](docs/sdk/README.md#listimportfiletask) -  Retrieves a list of all the imports performed. 
* [ListServers](docs/sdk/README.md#listservers) -  Returns a list of all the servers. 
* [PutPortfolioPreferences](docs/sdk/README.md#putportfoliopreferences) -  Saves the specified migration and modernization preferences. 
* [StartAssessment](docs/sdk/README.md#startassessment) -  Starts the assessment of an on-premises environment. 
* [StartImportFileTask](docs/sdk/README.md#startimportfiletask) -  Starts a file import. 
* [StartRecommendationReportGeneration](docs/sdk/README.md#startrecommendationreportgeneration) -  Starts generating a recommendation report. 
* [StopAssessment](docs/sdk/README.md#stopassessment) -  Stops the assessment of an on-premises environment. 
* [UpdateApplicationComponentConfig](docs/sdk/README.md#updateapplicationcomponentconfig) -  Updates the configuration of an application component. 
* [UpdateServerConfig](docs/sdk/README.md#updateserverconfig) -  Updates the configuration of the specified server. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
