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
import org.openapis.openapi.models.operations.CreateEnvironmentEc2XAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2Headers;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2Request;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2Response;
import org.openapis.openapi.models.shared.CreateEnvironmentEc2Request;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.ConnectionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateEnvironmentEc2Request req = new CreateEnvironmentEc2Request() {{
                headers = new CreateEnvironmentEc2Headers() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2";
                }};
                request = new CreateEnvironmentEc2Request() {{
                    automaticStopTimeMinutes = 847252;
                    clientRequestToken = "vel";
                    connectionType = "CONNECT_SSM";
                    description = "deserunt";
                    dryRun = false;
                    imageId = "suscipit";
                    instanceType = "iure";
                    name = "magnam";
                    ownerArn = "debitis";
                    subnetId = "ipsa";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "tempora";
                            value = "suscipit";
                        }}),
                        add(new Tag() {{
                            key = "molestiae";
                            value = "minus";
                        }}),
                        add(new Tag() {{
                            key = "placeat";
                            value = "voluptatum";
                        }}),
                        add(new Tag() {{
                            key = "iusto";
                            value = "excepturi";
                        }}),
                    }};
                }};
            }};            

            CreateEnvironmentEc2Response res = sdk.createEnvironmentEc2(req);

            if (res.createEnvironmentEc2Result.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createEnvironmentEc2` - Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
* `createEnvironmentMembership` - Adds an environment member to an Cloud9 development environment.
* `deleteEnvironment` - Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
* `deleteEnvironmentMembership` - Deletes an environment member from a development environment.
* `describeEnvironmentMemberships` - Gets information about environment members for an Cloud9 development environment.
* `describeEnvironmentStatus` - Gets status information for an Cloud9 development environment.
* `describeEnvironments` - Gets information about Cloud9 development environments.
* `listEnvironments` - Gets a list of Cloud9 development environment identifiers.
* `listTagsForResource` - Gets a list of the tags associated with an Cloud9 development environment.
* `tagResource` - <p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
* `untagResource` - Removes tags from an Cloud9 development environment.
* `updateEnvironment` - Changes the settings of an existing Cloud9 development environment.
* `updateEnvironmentMembership` - Changes the settings of an existing environment member for an Cloud9 development environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
