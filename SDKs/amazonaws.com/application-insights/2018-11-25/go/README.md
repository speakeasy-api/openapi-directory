# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/application-insights/2018-11-25/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateApplication(ctx, operations.CreateApplicationRequest{
        CreateApplicationRequest: shared.CreateApplicationRequest{
            AutoConfigEnabled: sdk.Bool(false),
            AutoCreate: sdk.Bool(false),
            CWEMonitorEnabled: sdk.Bool(false),
            GroupingType: shared.GroupingTypeEnumAccountBased.ToPointer(),
            OpsCenterEnabled: sdk.Bool(false),
            OpsItemSNSTopicArn: sdk.String("corrupti"),
            ResourceGroupName: sdk.String("provident"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quibusdam",
                    Value: "unde",
                },
                shared.Tag{
                    Key: "nulla",
                    Value: "corrupti",
                },
                shared.Tag{
                    Key: "illum",
                    Value: "vel",
                },
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.CreateApplicationXAmzTargetEnumEc2WindowsBarleyServiceCreateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateApplication](docs/sdk/README.md#createapplication) - Adds an application that is created from a resource group.
* [CreateComponent](docs/sdk/README.md#createcomponent) - Creates a custom component by grouping similar standalone instances to monitor.
* [CreateLogPattern](docs/sdk/README.md#createlogpattern) - Adds an log pattern to a <code>LogPatternSet</code>.
* [DeleteApplication](docs/sdk/README.md#deleteapplication) - Removes the specified application from monitoring. Does not delete the application.
* [DeleteComponent](docs/sdk/README.md#deletecomponent) - Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
* [DeleteLogPattern](docs/sdk/README.md#deletelogpattern) - Removes the specified log pattern from a <code>LogPatternSet</code>.
* [DescribeApplication](docs/sdk/README.md#describeapplication) - Describes the application.
* [DescribeComponent](docs/sdk/README.md#describecomponent) - Describes a component and lists the resources that are grouped together in a component.
* [DescribeComponentConfiguration](docs/sdk/README.md#describecomponentconfiguration) - Describes the monitoring configuration of the component.
* [DescribeComponentConfigurationRecommendation](docs/sdk/README.md#describecomponentconfigurationrecommendation) - Describes the recommended monitoring configuration of the component.
* [DescribeLogPattern](docs/sdk/README.md#describelogpattern) - Describe a specific log pattern from a <code>LogPatternSet</code>.
* [DescribeObservation](docs/sdk/README.md#describeobservation) - Describes an anomaly or error with the application.
* [DescribeProblem](docs/sdk/README.md#describeproblem) - Describes an application problem.
* [DescribeProblemObservations](docs/sdk/README.md#describeproblemobservations) - Describes the anomalies or errors associated with the problem.
* [ListApplications](docs/sdk/README.md#listapplications) - Lists the IDs of the applications that you are monitoring. 
* [ListComponents](docs/sdk/README.md#listcomponents) - Lists the auto-grouped, standalone, and custom components of the application.
* [ListConfigurationHistory](docs/sdk/README.md#listconfigurationhistory) - <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
* [ListLogPatternSets](docs/sdk/README.md#listlogpatternsets) - Lists the log pattern sets in the specific application.
* [ListLogPatterns](docs/sdk/README.md#listlogpatterns) - Lists the log patterns in the specific log <code>LogPatternSet</code>.
* [ListProblems](docs/sdk/README.md#listproblems) - Lists the problems with your application.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* [TagResource](docs/sdk/README.md#tagresource) - <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* [UntagResource](docs/sdk/README.md#untagresource) - Remove one or more tags (keys and values) from a specified application.
* [UpdateApplication](docs/sdk/README.md#updateapplication) - Updates the application.
* [UpdateComponent](docs/sdk/README.md#updatecomponent) - Updates the custom component name and/or the list of resources that make up the component.
* [UpdateComponentConfiguration](docs/sdk/README.md#updatecomponentconfiguration) - Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 
* [UpdateLogPattern](docs/sdk/README.md#updatelogpattern) - Adds a log pattern to a <code>LogPatternSet</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
