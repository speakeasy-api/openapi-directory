# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.operations.CreateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateApplicationRequest;
import org.openapis.openapi.models.shared.GroupingTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequest() {{
                                autoConfigEnabled = false;
                                autoCreate = false;
                                cweMonitorEnabled = false;
                                groupingType = GroupingTypeEnum.ACCOUNT_BASED;
                                opsCenterEnabled = false;
                                opsItemSNSTopicArn = "provident";
                                resourceGroupName = "distinctio";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("corrupti", "illum") {{
                                        key = "unde";
                                        value = "nulla";
                                    }}),
                                    add(new Tag("deserunt", "suscipit") {{
                                        key = "vel";
                                        value = "error";
                                    }}),
                                    add(new Tag("debitis", "ipsa") {{
                                        key = "iure";
                                        value = "magnam";
                                    }}),
                                    add(new Tag("suscipit", "molestiae") {{
                                        key = "delectus";
                                        value = "tempora";
                                    }}),
                                }};
                            }};, CreateApplicationXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_CREATE_APPLICATION) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.createApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createApplication](docs/sdk/README.md#createapplication) - Adds an application that is created from a resource group.
* [createComponent](docs/sdk/README.md#createcomponent) - Creates a custom component by grouping similar standalone instances to monitor.
* [createLogPattern](docs/sdk/README.md#createlogpattern) - Adds an log pattern to a <code>LogPatternSet</code>.
* [deleteApplication](docs/sdk/README.md#deleteapplication) - Removes the specified application from monitoring. Does not delete the application.
* [deleteComponent](docs/sdk/README.md#deletecomponent) - Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
* [deleteLogPattern](docs/sdk/README.md#deletelogpattern) - Removes the specified log pattern from a <code>LogPatternSet</code>.
* [describeApplication](docs/sdk/README.md#describeapplication) - Describes the application.
* [describeComponent](docs/sdk/README.md#describecomponent) - Describes a component and lists the resources that are grouped together in a component.
* [describeComponentConfiguration](docs/sdk/README.md#describecomponentconfiguration) - Describes the monitoring configuration of the component.
* [describeComponentConfigurationRecommendation](docs/sdk/README.md#describecomponentconfigurationrecommendation) - Describes the recommended monitoring configuration of the component.
* [describeLogPattern](docs/sdk/README.md#describelogpattern) - Describe a specific log pattern from a <code>LogPatternSet</code>.
* [describeObservation](docs/sdk/README.md#describeobservation) - Describes an anomaly or error with the application.
* [describeProblem](docs/sdk/README.md#describeproblem) - Describes an application problem.
* [describeProblemObservations](docs/sdk/README.md#describeproblemobservations) - Describes the anomalies or errors associated with the problem.
* [listApplications](docs/sdk/README.md#listapplications) - Lists the IDs of the applications that you are monitoring. 
* [listComponents](docs/sdk/README.md#listcomponents) - Lists the auto-grouped, standalone, and custom components of the application.
* [listConfigurationHistory](docs/sdk/README.md#listconfigurationhistory) - <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
* [listLogPatternSets](docs/sdk/README.md#listlogpatternsets) - Lists the log pattern sets in the specific application.
* [listLogPatterns](docs/sdk/README.md#listlogpatterns) - Lists the log patterns in the specific log <code>LogPatternSet</code>.
* [listProblems](docs/sdk/README.md#listproblems) - Lists the problems with your application.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* [tagResource](docs/sdk/README.md#tagresource) - <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* [untagResource](docs/sdk/README.md#untagresource) - Remove one or more tags (keys and values) from a specified application.
* [updateApplication](docs/sdk/README.md#updateapplication) - Updates the application.
* [updateComponent](docs/sdk/README.md#updatecomponent) - Updates the custom component name and/or the list of resources that make up the component.
* [updateComponentConfiguration](docs/sdk/README.md#updatecomponentconfiguration) - Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 
* [updateLogPattern](docs/sdk/README.md#updatelogpattern) - Adds a log pattern to a <code>LogPatternSet</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
