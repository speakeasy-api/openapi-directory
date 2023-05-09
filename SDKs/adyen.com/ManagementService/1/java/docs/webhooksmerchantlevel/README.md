# webhooksMerchantLevel

### Available Operations

* [deleteMerchantsMerchantIdWebhooksWebhookId](#deletemerchantsmerchantidwebhookswebhookid) - Remove a webhook
* [getMerchantsMerchantIdWebhooks](#getmerchantsmerchantidwebhooks) - List all webhooks
* [getMerchantsMerchantIdWebhooksWebhookId](#getmerchantsmerchantidwebhookswebhookid) - Get a webhook
* [patchMerchantsMerchantIdWebhooksWebhookId](#patchmerchantsmerchantidwebhookswebhookid) - Update a webhook
* [postMerchantsMerchantIdWebhooks](#postmerchantsmerchantidwebhooks) - Set up a webhook
* [postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac](#postmerchantsmerchantidwebhookswebhookidgeneratehmac) - Generate an HMAC key
* [postMerchantsMerchantIdWebhooksWebhookIdTest](#postmerchantsmerchantidwebhookswebhookidtest) - Test a webhook

## deleteMerchantsMerchantIdWebhooksWebhookId

Remove the configuration for the webhook identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMerchantsMerchantIdWebhooksWebhookIdRequest;
import org.openapis.openapi.models.operations.DeleteMerchantsMerchantIdWebhooksWebhookIdResponse;
import org.openapis.openapi.models.operations.DeleteMerchantsMerchantIdWebhooksWebhookIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMerchantsMerchantIdWebhooksWebhookIdRequest req = new DeleteMerchantsMerchantIdWebhooksWebhookIdRequest("doloremque", "cum");            

            DeleteMerchantsMerchantIdWebhooksWebhookIdResponse res = sdk.webhooksMerchantLevel.deleteMerchantsMerchantIdWebhooksWebhookId(req, new DeleteMerchantsMerchantIdWebhooksWebhookIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdWebhooks

Lists all webhook configurations for the merchant account.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdWebhooksRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdWebhooksResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdWebhooksSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdWebhooksRequest req = new GetMerchantsMerchantIdWebhooksRequest("nobis") {{
                pageNumber = 628314;
                pageSize = 783764;
            }};            

            GetMerchantsMerchantIdWebhooksResponse res = sdk.webhooksMerchantLevel.getMerchantsMerchantIdWebhooks(req, new GetMerchantsMerchantIdWebhooksSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listWebhooksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdWebhooksWebhookId

Returns the configuration for the webhook identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdWebhooksWebhookIdRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdWebhooksWebhookIdResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdWebhooksWebhookIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdWebhooksWebhookIdRequest req = new GetMerchantsMerchantIdWebhooksWebhookIdRequest("impedit", "nisi");            

            GetMerchantsMerchantIdWebhooksWebhookIdResponse res = sdk.webhooksMerchantLevel.getMerchantsMerchantIdWebhooksWebhookId(req, new GetMerchantsMerchantIdWebhooksWebhookIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchMerchantsMerchantIdWebhooksWebhookId

Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdWebhooksWebhookIdRequest;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdWebhooksWebhookIdResponse;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdWebhooksWebhookIdSecurity;
import org.openapis.openapi.models.shared.AdditionalSettings;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UpdateMerchantWebhookRequest;
import org.openapis.openapi.models.shared.UpdateMerchantWebhookRequestCommunicationFormatEnum;
import org.openapis.openapi.models.shared.UpdateMerchantWebhookRequestNetworkTypeEnum;
import org.openapis.openapi.models.shared.UpdateMerchantWebhookRequestSslVersionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchMerchantsMerchantIdWebhooksWebhookIdRequest req = new PatchMerchantsMerchantIdWebhooksWebhookIdRequest("cumque", "soluta") {{
                updateMerchantWebhookRequest = new UpdateMerchantWebhookRequest() {{
                    acceptsExpiredCertificate = false;
                    acceptsSelfSignedCertificate = false;
                    acceptsUntrustedRootCertificate = false;
                    active = false;
                    additionalSettings = new AdditionalSettings() {{
                        includeEventCodes = new String[]{{
                            add("laboriosam"),
                            add("nam"),
                            add("enim"),
                            add("maiores"),
                        }};
                        properties = new java.util.HashMap<String, Boolean>() {{
                            put("necessitatibus", false);
                        }};
                    }};;
                    communicationFormat = UpdateMerchantWebhookRequestCommunicationFormatEnum.SOAP;
                    description = "cupiditate";
                    networkType = UpdateMerchantWebhookRequestNetworkTypeEnum.LOCAL;
                    password = "provident";
                    populateSoapActionHeader = false;
                    sslVersion = UpdateMerchantWebhookRequestSslVersionEnum.SSL;
                    url = "accusantium";
                    username = "Eliseo.Zulauf";
                }};;
            }};            

            PatchMerchantsMerchantIdWebhooksWebhookIdResponse res = sdk.webhooksMerchantLevel.patchMerchantsMerchantIdWebhooksWebhookId(req, new PatchMerchantsMerchantIdWebhooksWebhookIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdWebhooks

Subscribe to receive webhook notifications about events related to your merchant account. You can add basic authentication to make sure the data is secure.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdWebhooksRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdWebhooksResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdWebhooksSecurity;
import org.openapis.openapi.models.shared.AdditionalSettings;
import org.openapis.openapi.models.shared.CreateMerchantWebhookRequest;
import org.openapis.openapi.models.shared.CreateMerchantWebhookRequestCommunicationFormatEnum;
import org.openapis.openapi.models.shared.CreateMerchantWebhookRequestNetworkTypeEnum;
import org.openapis.openapi.models.shared.CreateMerchantWebhookRequestSslVersionEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdWebhooksRequest req = new PostMerchantsMerchantIdWebhooksRequest("vel") {{
                createMerchantWebhookRequest = new CreateMerchantWebhookRequest(false, CreateMerchantWebhookRequestCommunicationFormatEnum.SOAP, "id", "possimus") {{
                    acceptsExpiredCertificate = false;
                    acceptsSelfSignedCertificate = false;
                    acceptsUntrustedRootCertificate = false;
                    additionalSettings = new AdditionalSettings() {{
                        includeEventCodes = new String[]{{
                            add("ipsam"),
                        }};
                        properties = new java.util.HashMap<String, Boolean>() {{
                            put("sequi", false);
                            put("voluptatum", false);
                        }};
                    }};;
                    description = "quasi";
                    networkType = CreateMerchantWebhookRequestNetworkTypeEnum.PUBLIC_;
                    password = "nobis";
                    populateSoapActionHeader = false;
                    sslVersion = CreateMerchantWebhookRequestSslVersionEnum.SS_LV3;
                    username = "Jabari.Gibson91";
                }};;
            }};            

            PostMerchantsMerchantIdWebhooksResponse res = sdk.webhooksMerchantLevel.postMerchantsMerchantIdWebhooks(req, new PostMerchantsMerchantIdWebhooksSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac

Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving [HMAC-signed notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures) from Adyen. Find out more about how to [verify HMAC signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRequest req = new PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRequest("possimus", "fugit");            

            PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacResponse res = sdk.webhooksMerchantLevel.postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac(req, new PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.generateHmacKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdWebhooksWebhookIdTest

Sends sample notifications to test if the webhook is set up correctly.

We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.

The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other fields to troubleshoot unsuccessful tests.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdWebhooksWebhookIdTestRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdWebhooksWebhookIdTestResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdWebhooksWebhookIdTestSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CustomNotification;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TestWebhookRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdWebhooksWebhookIdTestRequest req = new PostMerchantsMerchantIdWebhooksWebhookIdTestRequest("voluptatem", "repudiandae") {{
                testWebhookRequest = new TestWebhookRequest() {{
                    notification = new CustomNotification() {{
                        amount = new Amount("corporis", 411626L);;
                        eventCode = "eos";
                        eventDate = OffsetDateTime.parse("2022-07-01T20:30:54.862Z");
                        merchantReference = "hic";
                        paymentMethod = "maiores";
                        reason = "asperiores";
                        success = false;
                    }};;
                    types = new String[]{{
                        add("nesciunt"),
                        add("cupiditate"),
                    }};
                }};;
            }};            

            PostMerchantsMerchantIdWebhooksWebhookIdTestResponse res = sdk.webhooksMerchantLevel.postMerchantsMerchantIdWebhooksWebhookIdTest(req, new PostMerchantsMerchantIdWebhooksWebhookIdTestSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.testWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
