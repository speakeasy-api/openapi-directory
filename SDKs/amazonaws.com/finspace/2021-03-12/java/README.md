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
import org.openapis.openapi.models.operations.CreateEnvironmentHeaders;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyFederationModeEnum;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodyFederationParameters;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBodySuperuserParameters;
import org.openapis.openapi.models.operations.CreateEnvironmentRequestBody;
import org.openapis.openapi.models.operations.CreateEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateEnvironmentResponse;

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

            CreateEnvironmentRequest req = new CreateEnvironmentRequest() {{
                headers = new CreateEnvironmentHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateEnvironmentRequestBody() {{
                    dataBundles = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    description = "iure";
                    federationMode = "FEDERATED";
                    federationParameters = new CreateEnvironmentRequestBodyFederationParameters() {{
                        applicationCallBackURL = "debitis";
                        attributeMap = new java.util.HashMap<String, String>() {{
                            put("delectus", "tempora");
                        }};
                        federationProviderName = "suscipit";
                        federationURN = "molestiae";
                        samlMetadataDocument = "minus";
                        samlMetadataURL = "placeat";
                    }};
                    kmsKeyId = "voluptatum";
                    name = "iusto";
                    superuserParameters = new CreateEnvironmentRequestBodySuperuserParameters() {{
                        emailAddress = "excepturi";
                        firstName = "Glen";
                        lastName = "Walsh";
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("ab", "quis");
                        put("veritatis", "deserunt");
                        put("perferendis", "ipsam");
                        put("repellendus", "sapiente");
                    }};
                }};
            }};            

            CreateEnvironmentResponse res = sdk.createEnvironment(req);

            if (res.createEnvironmentResponse.isPresent()) {
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

* `createEnvironment` - Create a new FinSpace environment.
* `deleteEnvironment` - Delete an FinSpace environment.
* `getEnvironment` - Returns the FinSpace environment object.
* `listEnvironments` - A list of all of your FinSpace environments.
* `listTagsForResource` - A list of all tags for a resource.
* `tagResource` - Adds metadata tags to a FinSpace resource.
* `untagResource` - Removes metadata tags from a FinSpace resource.
* `updateEnvironment` - Update your FinSpace environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
