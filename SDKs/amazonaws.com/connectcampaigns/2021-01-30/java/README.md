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
import org.openapis.openapi.models.operations.CreateCampaignRequest;
import org.openapis.openapi.models.operations.CreateCampaignRequestBody;
import org.openapis.openapi.models.operations.CreateCampaignRequestBodyDialerConfig;
import org.openapis.openapi.models.operations.CreateCampaignRequestBodyOutboundCallConfig;
import org.openapis.openapi.models.operations.CreateCampaignResponse;
import org.openapis.openapi.models.shared.AnswerMachineDetectionConfig;
import org.openapis.openapi.models.shared.PredictiveDialerConfig;
import org.openapis.openapi.models.shared.ProgressiveDialerConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCampaignRequest req = new CreateCampaignRequest(                new CreateCampaignRequestBody("provident",                 new CreateCampaignRequestBodyDialerConfig() {{
                                                predictiveDialerConfig = new PredictiveDialerConfig(7151.9);;
                                                progressiveDialerConfig = new ProgressiveDialerConfig(8442.66);;
                                            }};, "unde",                 new CreateCampaignRequestBodyOutboundCallConfig() {{
                                                answerMachineDetectionConfig = new AnswerMachineDetectionConfig(false);;
                                                connectContactFlowId = "nulla";
                                                connectQueueId = "corrupti";
                                                connectSourcePhoneNumber = "illum";
                                            }};) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("error", "deserunt");
                                    put("suscipit", "iure");
                                }};
                            }};) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateCampaignResponse res = sdk.createCampaign(req);

            if (res.createCampaignResponse != null) {
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

* [createCampaign](docs/sdk/README.md#createcampaign) - Creates a campaign for the specified Amazon Connect account. This API is idempotent.
* [deleteCampaign](docs/sdk/README.md#deletecampaign) - Deletes a campaign from the specified Amazon Connect account.
* [deleteConnectInstanceConfig](docs/sdk/README.md#deleteconnectinstanceconfig) - Deletes a connect instance config from the specified AWS account.
* [deleteInstanceOnboardingJob](docs/sdk/README.md#deleteinstanceonboardingjob) - Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
* [describeCampaign](docs/sdk/README.md#describecampaign) - Describes the specific campaign.
* [getCampaignState](docs/sdk/README.md#getcampaignstate) - Get state of a campaign for the specified Amazon Connect account.
* [getCampaignStateBatch](docs/sdk/README.md#getcampaignstatebatch) - Get state of campaigns for the specified Amazon Connect account.
* [getConnectInstanceConfig](docs/sdk/README.md#getconnectinstanceconfig) - Get the specific Connect instance config.
* [getInstanceOnboardingJobStatus](docs/sdk/README.md#getinstanceonboardingjobstatus) - Get the specific instance onboarding job status.
* [listCampaigns](docs/sdk/README.md#listcampaigns) - Provides summary information about the campaigns under the specified Amazon Connect account.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - List tags for a resource.
* [pauseCampaign](docs/sdk/README.md#pausecampaign) - Pauses a campaign for the specified Amazon Connect account.
* [putDialRequestBatch](docs/sdk/README.md#putdialrequestbatch) - Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
* [resumeCampaign](docs/sdk/README.md#resumecampaign) - Stops a campaign for the specified Amazon Connect account.
* [startCampaign](docs/sdk/README.md#startcampaign) - Starts a campaign for the specified Amazon Connect account.
* [startInstanceOnboardingJob](docs/sdk/README.md#startinstanceonboardingjob) - Onboard the specific Amazon Connect instance to Connect Campaigns.
* [stopCampaign](docs/sdk/README.md#stopcampaign) - Stops a campaign for the specified Amazon Connect account.
* [tagResource](docs/sdk/README.md#tagresource) - Tag a resource.
* [untagResource](docs/sdk/README.md#untagresource) - Untag a resource.
* [updateCampaignDialerConfig](docs/sdk/README.md#updatecampaigndialerconfig) - Updates the dialer config of a campaign. This API is idempotent.
* [updateCampaignName](docs/sdk/README.md#updatecampaignname) - Updates the name of a campaign. This API is idempotent.
* [updateCampaignOutboundCallConfig](docs/sdk/README.md#updatecampaignoutboundcallconfig) - Updates the outbound call config of a campaign. This API is idempotent.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
