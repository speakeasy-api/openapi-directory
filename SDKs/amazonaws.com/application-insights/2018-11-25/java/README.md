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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.shared.CreateApplicationRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.GroupingTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest() {{
                createApplicationRequest = new CreateApplicationRequest() {{
                    autoConfigEnabled = false;
                    autoCreate = false;
                    cweMonitorEnabled = false;
                    groupingType = "ACCOUNT_BASED";
                    opsCenterEnabled = false;
                    opsItemSNSTopicArn = "corrupti";
                    resourceGroupName = "provident";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "quibusdam";
                            value = "unde";
                        }}),
                        add(new Tag() {{
                            key = "nulla";
                            value = "corrupti";
                        }}),
                        add(new Tag() {{
                            key = "illum";
                            value = "vel";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "suscipit";
                xAmzDate = "iure";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsa";
                xAmzTarget = "EC2WindowsBarleyService.CreateApplication";
            }}            

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.createApplicationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createApplication` - Adds an application that is created from a resource group.
* `createComponent` - Creates a custom component by grouping similar standalone instances to monitor.
* `createLogPattern` - Adds an log pattern to a <code>LogPatternSet</code>.
* `deleteApplication` - Removes the specified application from monitoring. Does not delete the application.
* `deleteComponent` - Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
* `deleteLogPattern` - Removes the specified log pattern from a <code>LogPatternSet</code>.
* `describeApplication` - Describes the application.
* `describeComponent` - Describes a component and lists the resources that are grouped together in a component.
* `describeComponentConfiguration` - Describes the monitoring configuration of the component.
* `describeComponentConfigurationRecommendation` - Describes the recommended monitoring configuration of the component.
* `describeLogPattern` - Describe a specific log pattern from a <code>LogPatternSet</code>.
* `describeObservation` - Describes an anomaly or error with the application.
* `describeProblem` - Describes an application problem.
* `describeProblemObservations` - Describes the anomalies or errors associated with the problem.
* `listApplications` - Lists the IDs of the applications that you are monitoring. 
* `listComponents` - Lists the auto-grouped, standalone, and custom components of the application.
* `listConfigurationHistory` - <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
* `listLogPatternSets` - Lists the log pattern sets in the specific application.
* `listLogPatterns` - Lists the log patterns in the specific log <code>LogPatternSet</code>.
* `listProblems` - Lists the problems with your application.
* `listTagsForResource` - Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* `tagResource` - <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* `untagResource` - Remove one or more tags (keys and values) from a specified application.
* `updateApplication` - Updates the application.
* `updateComponent` - Updates the custom component name and/or the list of resources that make up the component.
* `updateComponentConfiguration` - Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 
* `updateLogPattern` - Adds a log pattern to a <code>LogPatternSet</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
