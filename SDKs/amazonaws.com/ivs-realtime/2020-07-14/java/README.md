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
import org.openapis.openapi.models.operations.CreateParticipantTokenRequest;
import org.openapis.openapi.models.operations.CreateParticipantTokenRequestBody;
import org.openapis.openapi.models.operations.CreateParticipantTokenResponse;
import org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateParticipantTokenRequest req = new CreateParticipantTokenRequest(                new CreateParticipantTokenRequestBody("provident") {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "unde");
                                    put("nulla", "corrupti");
                                    put("illum", "vel");
                                }};
                                capabilities = new org.openapis.openapi.models.shared.ParticipantTokenCapabilityEnum[]{{
                                    add(ParticipantTokenCapabilityEnum.SUBSCRIBE),
                                    add(ParticipantTokenCapabilityEnum.PUBLISH),
                                    add(ParticipantTokenCapabilityEnum.PUBLISH),
                                }};
                                duration = 297534L;
                                userId = "debitis";
                            }};) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            CreateParticipantTokenResponse res = sdk.createParticipantToken(req);

            if (res.createParticipantTokenResponse != null) {
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

* [createParticipantToken](docs/sdk/README.md#createparticipanttoken) - <p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>
* [createStage](docs/sdk/README.md#createstage) - Creates a new stage (and optionally participant tokens).
* [deleteStage](docs/sdk/README.md#deletestage) - Shuts down and deletes the specified stage (disconnecting all participants).
* [disconnectParticipant](docs/sdk/README.md#disconnectparticipant) - Disconnects a specified participant and revokes the participant permanently from a specified stage.
* [getStage](docs/sdk/README.md#getstage) - Gets information for the specified stage.
* [listStages](docs/sdk/README.md#liststages) - Gets summary information about all stages in your account, in the AWS region where the API request is processed.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets information about AWS tags for the specified ARN.
* [tagResource](docs/sdk/README.md#tagresource) - Adds or updates tags for the AWS resource with the specified ARN.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from the resource with the specified ARN.
* [updateStage](docs/sdk/README.md#updatestage) - Updates a stage’s configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
