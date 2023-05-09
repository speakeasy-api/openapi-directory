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
import org.openapis.openapi.models.operations.CreateConnectionRequest;
import org.openapis.openapi.models.operations.CreateConnectionResponse;
import org.openapis.openapi.models.operations.CreateConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateConnectionInput;
import org.openapis.openapi.models.shared.ProviderTypeEnum;
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

            CreateConnectionRequest req = new CreateConnectionRequest(                new CreateConnectionInput("provident") {{
                                hostArn = "distinctio";
                                providerType = ProviderTypeEnum.GIT_HUB_ENTERPRISE_SERVER;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("illum", "vel") {{
                                        key = "nulla";
                                        value = "corrupti";
                                    }}),
                                    add(new Tag("suscipit", "iure") {{
                                        key = "error";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag("ipsa", "delectus") {{
                                        key = "magnam";
                                        value = "debitis";
                                    }}),
                                }};
                            }};, CreateConnectionXAmzTargetEnum.COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_CREATE_CONNECTION) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            CreateConnectionResponse res = sdk.createConnection(req);

            if (res.createConnectionOutput != null) {
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

* [createConnection](docs/sdk/README.md#createconnection) - Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
* [createHost](docs/sdk/README.md#createhost) - <p>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>
* [deleteConnection](docs/sdk/README.md#deleteconnection) - The connection to be deleted.
* [deleteHost](docs/sdk/README.md#deletehost) - <p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p> <note> <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p> </note>
* [getConnection](docs/sdk/README.md#getconnection) - Returns the connection ARN and details such as status, owner, and provider type.
* [getHost](docs/sdk/README.md#gethost) - Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.
* [listConnections](docs/sdk/README.md#listconnections) - Lists the connections associated with your account.
* [listHosts](docs/sdk/README.md#listhosts) - Lists the hosts associated with your account.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets the set of key-value pairs (metadata) that are used to manage the resource.
* [tagResource](docs/sdk/README.md#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from an AWS resource.
* [updateHost](docs/sdk/README.md#updatehost) - Updates a specified host with the provided configurations.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
