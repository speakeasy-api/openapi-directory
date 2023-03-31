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

import org.openapis.openapi.models.operations.DeleteApiV1ClipsIdSecurity;
import org.openapis.openapi.models.operations.DeleteApiV1ClipsIdPathParams;
import org.openapis.openapi.models.operations.DeleteApiV1ClipsIdRequest;
import org.openapis.openapi.models.operations.DeleteApiV1ClipsIdResponse;
import org.openapis.openapi.models.shared.SchemeBearerHeader;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiV1ClipsIdRequest req = new DeleteApiV1ClipsIdRequest() {{
                security = new DeleteApiV1ClipsIdSecurity() {{
                    bearerHeader = new SchemeBearerHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteApiV1ClipsIdPathParams() {{
                    id = "corrupti";
                }};
            }};            

            DeleteApiV1ClipsIdResponse res = sdk.deleteApiV1ClipsId(req);

            if (res.statusCode == 200) {
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

* `deleteApiV1ClipsId` - delete clip
* `deleteApiV1MediasId` - delete media
* `deleteApiV1WebhookSubscriptionsId` - delete webhook subscription
* `getApiV1Clips` - list clips
* `getApiV1ClipsId` - show clip
* `getApiV1DirectUploads` - prepare presigned upload url
* `getApiV1Medias` - list medias
* `getApiV1MediasId` - show media
* `getApiV1WebhookSubscriptions` - list webhook subscriptions
* `getApiV1WebhookSubscriptionsId` - show webhook subscription
* `postApiV1Clips` - create clip
* `postApiV1Medias` - create media
* `postApiV1WebhookSubscriptions` - create webhook subscription
* `putApiV1ClipsId` - update clip
* `putApiV1MediasId` - update media
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
