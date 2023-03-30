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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateApplicationRequest{
        Headers: operations.CreateApplicationHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "EC2WindowsBarleyService.CreateApplication",
        },
        Request: shared.CreateApplicationRequest{
            AutoConfigEnabled: false,
            AutoCreate: false,
            CWEMonitorEnabled: false,
            GroupingType: "ACCOUNT_BASED",
            OpsCenterEnabled: false,
            OpsItemSNSTopicArn: "illum",
            ResourceGroupName: "vel",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateApplication(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `CreateApplication` - Adds an application that is created from a resource group.
* `CreateComponent` - Creates a custom component by grouping similar standalone instances to monitor.
* `CreateLogPattern` - Adds an log pattern to a <code>LogPatternSet</code>.
* `DeleteApplication` - Removes the specified application from monitoring. Does not delete the application.
* `DeleteComponent` - Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
* `DeleteLogPattern` - Removes the specified log pattern from a <code>LogPatternSet</code>.
* `DescribeApplication` - Describes the application.
* `DescribeComponent` - Describes a component and lists the resources that are grouped together in a component.
* `DescribeComponentConfiguration` - Describes the monitoring configuration of the component.
* `DescribeComponentConfigurationRecommendation` - Describes the recommended monitoring configuration of the component.
* `DescribeLogPattern` - Describe a specific log pattern from a <code>LogPatternSet</code>.
* `DescribeObservation` - Describes an anomaly or error with the application.
* `DescribeProblem` - Describes an application problem.
* `DescribeProblemObservations` - Describes the anomalies or errors associated with the problem.
* `ListApplications` - Lists the IDs of the applications that you are monitoring. 
* `ListComponents` - Lists the auto-grouped, standalone, and custom components of the application.
* `ListConfigurationHistory` - <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
* `ListLogPatternSets` - Lists the log pattern sets in the specific application.
* `ListLogPatterns` - Lists the log patterns in the specific log <code>LogPatternSet</code>.
* `ListProblems` - Lists the problems with your application.
* `ListTagsForResource` - Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* `TagResource` - <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* `UntagResource` - Remove one or more tags (keys and values) from a specified application.
* `UpdateApplication` - Updates the application.
* `UpdateComponent` - Updates the custom component name and/or the list of resources that make up the component.
* `UpdateComponentConfiguration` - Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 
* `UpdateLogPattern` - Adds a log pattern to a <code>LogPatternSet</code>.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
