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
import org.openapis.openapi.models.operations.CreateEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyFederationModeEnum;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyFederationParameters;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodySuperuserParameters;
import org.openapis.openapi.models.operations.CreateEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEnvironmentRequest req = new CreateEnvironmentRequest(                new CreateEnvironmentRequestBody("provident") {{
                                dataBundles = new String[]{{
                                    add("quibusdam"),
                                    add("unde"),
                                    add("nulla"),
                                }};
                                description = "corrupti";
                                federationMode = CreateEnvironmentRequestBodyFederationModeEnum.LOCAL;
                                federationParameters = new CreateEnvironmentRequestBodyFederationParameters() {{
                                    applicationCallBackURL = "vel";
                                    attributeMap = new java.util.HashMap<String, String>() {{
                                        put("deserunt", "suscipit");
                                        put("iure", "magnam");
                                        put("debitis", "ipsa");
                                    }};
                                    federationProviderName = "delectus";
                                    federationURN = "tempora";
                                    samlMetadataDocument = "suscipit";
                                    samlMetadataURL = "molestiae";
                                }};;
                                kmsKeyId = "minus";
                                superuserParameters = new CreateEnvironmentRequestBodySuperuserParameters() {{
                                    emailAddress = "placeat";
                                    firstName = "Junior";
                                    lastName = "Kshlerin";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("nisi", "recusandae");
                                    put("temporibus", "ab");
                                    put("quis", "veritatis");
                                }};
                            }};) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            CreateEnvironmentResponse res = sdk.createEnvironment(req);

            if (res.createEnvironmentResponse != null) {
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

* [createEnvironment](docs/sdk/README.md#createenvironment) - Create a new FinSpace environment.
* [deleteEnvironment](docs/sdk/README.md#deleteenvironment) - Delete an FinSpace environment.
* [getEnvironment](docs/sdk/README.md#getenvironment) - Returns the FinSpace environment object.
* [listEnvironments](docs/sdk/README.md#listenvironments) - A list of all of your FinSpace environments.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - A list of all tags for a resource.
* [tagResource](docs/sdk/README.md#tagresource) - Adds metadata tags to a FinSpace resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes metadata tags from a FinSpace resource.
* [updateEnvironment](docs/sdk/README.md#updateenvironment) - Update your FinSpace environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
