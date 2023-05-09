# webhooksCompanyLevel

### Available Operations

* [deleteCompaniesCompanyIdWebhooksWebhookId](#deletecompaniescompanyidwebhookswebhookid) - Remove a webhook
* [getCompaniesCompanyIdWebhooks](#getcompaniescompanyidwebhooks) - List all webhooks
* [getCompaniesCompanyIdWebhooksWebhookId](#getcompaniescompanyidwebhookswebhookid) - Get a webhook
* [patchCompaniesCompanyIdWebhooksWebhookId](#patchcompaniescompanyidwebhookswebhookid) - Update a webhook
* [postCompaniesCompanyIdWebhooks](#postcompaniescompanyidwebhooks) - Set up a webhook
* [postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac](#postcompaniescompanyidwebhookswebhookidgeneratehmac) - Generate an HMAC key
* [postCompaniesCompanyIdWebhooksWebhookIdTest](#postcompaniescompanyidwebhookswebhookidtest) - Test a webhook

## deleteCompaniesCompanyIdWebhooksWebhookId

Remove the configuration for the webhook identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCompaniesCompanyIdWebhooksWebhookIdRequest;
import org.openapis.openapi.models.operations.DeleteCompaniesCompanyIdWebhooksWebhookIdResponse;
import org.openapis.openapi.models.operations.DeleteCompaniesCompanyIdWebhooksWebhookIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCompaniesCompanyIdWebhooksWebhookIdRequest req = new DeleteCompaniesCompanyIdWebhooksWebhookIdRequest("ducimus", "laudantium");            

            DeleteCompaniesCompanyIdWebhooksWebhookIdResponse res = sdk.webhooksCompanyLevel.deleteCompaniesCompanyIdWebhooksWebhookId(req, new DeleteCompaniesCompanyIdWebhooksWebhookIdSecurity() {{
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

## getCompaniesCompanyIdWebhooks

Lists all webhook configurations for the company account.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdWebhooksRequest req = new GetCompaniesCompanyIdWebhooksRequest("rerum") {{
                pageNumber = 643997;
                pageSize = 138436;
            }};            

            GetCompaniesCompanyIdWebhooksResponse res = sdk.webhooksCompanyLevel.getCompaniesCompanyIdWebhooks(req, new GetCompaniesCompanyIdWebhooksSecurity() {{
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

## getCompaniesCompanyIdWebhooksWebhookId

Returns the configuration for the webhook identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksWebhookIdRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksWebhookIdResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdWebhooksWebhookIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdWebhooksWebhookIdRequest req = new GetCompaniesCompanyIdWebhooksWebhookIdRequest("ad", "sequi");            

            GetCompaniesCompanyIdWebhooksWebhookIdResponse res = sdk.webhooksCompanyLevel.getCompaniesCompanyIdWebhooksWebhookId(req, new GetCompaniesCompanyIdWebhooksWebhookIdSecurity() {{
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

## patchCompaniesCompanyIdWebhooksWebhookId

Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdWebhooksWebhookIdRequest;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdWebhooksWebhookIdResponse;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdWebhooksWebhookIdSecurity;
import org.openapis.openapi.models.shared.AdditionalSettings;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UpdateCompanyWebhookRequest;
import org.openapis.openapi.models.shared.UpdateCompanyWebhookRequestCommunicationFormatEnum;
import org.openapis.openapi.models.shared.UpdateCompanyWebhookRequestFilterMerchantAccountTypeEnum;
import org.openapis.openapi.models.shared.UpdateCompanyWebhookRequestNetworkTypeEnum;
import org.openapis.openapi.models.shared.UpdateCompanyWebhookRequestSslVersionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchCompaniesCompanyIdWebhooksWebhookIdRequest req = new PatchCompaniesCompanyIdWebhooksWebhookIdRequest("beatae", "iusto") {{
                updateCompanyWebhookRequest = new UpdateCompanyWebhookRequest() {{
                    acceptsExpiredCertificate = false;
                    acceptsSelfSignedCertificate = false;
                    acceptsUntrustedRootCertificate = false;
                    active = false;
                    additionalSettings = new AdditionalSettings() {{
                        includeEventCodes = new String[]{{
                            add("magnam"),
                            add("odio"),
                        }};
                        properties = new java.util.HashMap<String, Boolean>() {{
                            put("impedit", false);
                            put("cupiditate", false);
                            put("illo", false);
                            put("exercitationem", false);
                        }};
                    }};;
                    communicationFormat = UpdateCompanyWebhookRequestCommunicationFormatEnum.SOAP;
                    description = "illum";
                    filterMerchantAccountType = UpdateCompanyWebhookRequestFilterMerchantAccountTypeEnum.ALL_ACCOUNTS;
                    filterMerchantAccounts = new String[]{{
                        add("dolorum"),
                        add("repellat"),
                        add("nostrum"),
                        add("illum"),
                    }};
                    networkType = UpdateCompanyWebhookRequestNetworkTypeEnum.PUBLIC_;
                    password = "commodi";
                    populateSoapActionHeader = false;
                    sslVersion = UpdateCompanyWebhookRequestSslVersionEnum.TLS;
                    url = "explicabo";
                    username = "Darrell.Spencer97";
                }};;
            }};            

            PatchCompaniesCompanyIdWebhooksWebhookIdResponse res = sdk.webhooksCompanyLevel.patchCompaniesCompanyIdWebhooksWebhookId(req, new PatchCompaniesCompanyIdWebhooksWebhookIdSecurity() {{
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

## postCompaniesCompanyIdWebhooks

Subscribe to receive webhook notifications about events related to your company account. You can add basic authentication to make sure the data is secure.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksRequest;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksResponse;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksSecurity;
import org.openapis.openapi.models.shared.AdditionalSettings;
import org.openapis.openapi.models.shared.CreateCompanyWebhookRequest;
import org.openapis.openapi.models.shared.CreateCompanyWebhookRequestCommunicationFormatEnum;
import org.openapis.openapi.models.shared.CreateCompanyWebhookRequestFilterMerchantAccountTypeEnum;
import org.openapis.openapi.models.shared.CreateCompanyWebhookRequestNetworkTypeEnum;
import org.openapis.openapi.models.shared.CreateCompanyWebhookRequestSslVersionEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompaniesCompanyIdWebhooksRequest req = new PostCompaniesCompanyIdWebhooksRequest("exercitationem") {{
                createCompanyWebhookRequest = new CreateCompanyWebhookRequest(false, CreateCompanyWebhookRequestCommunicationFormatEnum.JSON, CreateCompanyWebhookRequestFilterMerchantAccountTypeEnum.INCLUDE_ACCOUNTS,                 new String[]{{
                                    add("sapiente"),
                                }}, "neque", "officia") {{
                    acceptsExpiredCertificate = false;
                    acceptsSelfSignedCertificate = false;
                    acceptsUntrustedRootCertificate = false;
                    additionalSettings = new AdditionalSettings() {{
                        includeEventCodes = new String[]{{
                            add("harum"),
                            add("ducimus"),
                        }};
                        properties = new java.util.HashMap<String, Boolean>() {{
                            put("perferendis", false);
                        }};
                    }};;
                    description = "laudantium";
                    networkType = CreateCompanyWebhookRequestNetworkTypeEnum.LOCAL;
                    password = "corrupti";
                    populateSoapActionHeader = false;
                    sslVersion = CreateCompanyWebhookRequestSslVersionEnum.TLS;
                    username = "Eusebio30";
                }};;
            }};            

            PostCompaniesCompanyIdWebhooksResponse res = sdk.webhooksCompanyLevel.postCompaniesCompanyIdWebhooks(req, new PostCompaniesCompanyIdWebhooksSecurity() {{
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

## postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac

Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving [HMAC-signed notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures) from Adyen. Find out more about how to [verify HMAC signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacResponse;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest req = new PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest("amet", "sapiente");            

            PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacResponse res = sdk.webhooksCompanyLevel.postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac(req, new PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacSecurity() {{
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

## postCompaniesCompanyIdWebhooksWebhookIdTest

Sends sample notifications to test if the webhook is set up correctly.

We send sample notifications for maximum 20 of the merchant accounts that the webhook is configured for. If the webhook is configured for more than 20 merchant accounts, use the `merchantIds` array to specify a subset of the merchant accounts for which to send test notifications.

We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.

The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other response fields to troubleshoot unsuccessful tests.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Webhooks read and write

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdTestRequest;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdTestResponse;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdWebhooksWebhookIdTestSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CustomNotification;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TestCompanyWebhookRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompaniesCompanyIdWebhooksWebhookIdTestRequest req = new PostCompaniesCompanyIdWebhooksWebhookIdTestRequest("corporis", "est") {{
                testCompanyWebhookRequest = new TestCompanyWebhookRequest() {{
                    merchantIds = new String[]{{
                        add("quisquam"),
                        add("provident"),
                    }};
                    notification = new CustomNotification() {{
                        amount = new Amount("laudantium", 722392L);;
                        eventCode = "nemo";
                        eventDate = OffsetDateTime.parse("2022-08-18T12:10:26.870Z");
                        merchantReference = "minima";
                        paymentMethod = "tempora";
                        reason = "perferendis";
                        success = false;
                    }};;
                    types = new String[]{{
                        add("doloremque"),
                        add("fugiat"),
                        add("numquam"),
                    }};
                }};;
            }};            

            PostCompaniesCompanyIdWebhooksWebhookIdTestResponse res = sdk.webhooksCompanyLevel.postCompaniesCompanyIdWebhooksWebhookIdTest(req, new PostCompaniesCompanyIdWebhooksWebhookIdTestSecurity() {{
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
