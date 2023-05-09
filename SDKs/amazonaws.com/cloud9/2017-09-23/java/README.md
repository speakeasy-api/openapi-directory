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
import org.openapis.openapi.models.operations.CreateEnvironmentEc2Request;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2Response;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2XAmzTargetEnum;
import org.openapis.openapi.models.shared.ConnectionTypeEnum;
import org.openapis.openapi.models.shared.CreateEnvironmentEc2Request;
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

            CreateEnvironmentEc2Request req = new CreateEnvironmentEc2Request(                new CreateEnvironmentEc2Request("provident", "distinctio") {{
                                automaticStopTimeMinutes = 844266L;
                                clientRequestToken = "unde";
                                connectionType = ConnectionTypeEnum.CONNECT_SSM;
                                description = "corrupti";
                                dryRun = false;
                                imageId = "illum";
                                ownerArn = "vel";
                                subnetId = "error";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("magnam", "debitis") {{
                                        key = "suscipit";
                                        value = "iure";
                                    }}),
                                    add(new Tag("tempora", "suscipit") {{
                                        key = "ipsa";
                                        value = "delectus";
                                    }}),
                                    add(new Tag("placeat", "voluptatum") {{
                                        key = "molestiae";
                                        value = "minus";
                                    }}),
                                }};
                            }};, CreateEnvironmentEc2XAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_CREATE_ENVIRONMENT_EC2) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            CreateEnvironmentEc2Response res = sdk.createEnvironmentEc2(req);

            if (res.createEnvironmentEc2Result != null) {
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

* [createEnvironmentEc2](docs/sdk/README.md#createenvironmentec2) - Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
* [createEnvironmentMembership](docs/sdk/README.md#createenvironmentmembership) - Adds an environment member to an Cloud9 development environment.
* [deleteEnvironment](docs/sdk/README.md#deleteenvironment) - Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
* [deleteEnvironmentMembership](docs/sdk/README.md#deleteenvironmentmembership) - Deletes an environment member from a development environment.
* [describeEnvironmentMemberships](docs/sdk/README.md#describeenvironmentmemberships) - Gets information about environment members for an Cloud9 development environment.
* [describeEnvironmentStatus](docs/sdk/README.md#describeenvironmentstatus) - Gets status information for an Cloud9 development environment.
* [describeEnvironments](docs/sdk/README.md#describeenvironments) - Gets information about Cloud9 development environments.
* [listEnvironments](docs/sdk/README.md#listenvironments) - Gets a list of Cloud9 development environment identifiers.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets a list of the tags associated with an Cloud9 development environment.
* [tagResource](docs/sdk/README.md#tagresource) - <p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from an Cloud9 development environment.
* [updateEnvironment](docs/sdk/README.md#updateenvironment) - Changes the settings of an existing Cloud9 development environment.
* [updateEnvironmentMembership](docs/sdk/README.md#updateenvironmentmembership) - Changes the settings of an existing environment member for an Cloud9 development environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
