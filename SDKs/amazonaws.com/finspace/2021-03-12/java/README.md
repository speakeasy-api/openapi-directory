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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEnvironmentRequest req = new CreateEnvironmentRequest() {{
                requestBody = new CreateEnvironmentRequestBody() {{
                    dataBundles = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    description = "unde";
                    federationMode = "LOCAL";
                    federationParameters = new CreateEnvironmentRequestBodyFederationParameters() {{
                        applicationCallBackURL = "corrupti";
                        attributeMap = new java.util.HashMap<String, String>() {{
                            put("vel", "error");
                            put("deserunt", "suscipit");
                            put("iure", "magnam");
                            put("debitis", "ipsa");
                        }};
                        federationProviderName = "delectus";
                        federationURN = "tempora";
                        samlMetadataDocument = "suscipit";
                        samlMetadataURL = "molestiae";
                    }};
                    kmsKeyId = "minus";
                    name = "placeat";
                    superuserParameters = new CreateEnvironmentRequestBodySuperuserParameters() {{
                        emailAddress = "voluptatum";
                        firstName = "Jaycee";
                        lastName = "Mante";
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("recusandae", "temporibus");
                        put("ab", "quis");
                    }};
                }};
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "perferendis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quo";
            }}            

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
## Available Resources and Operations

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
