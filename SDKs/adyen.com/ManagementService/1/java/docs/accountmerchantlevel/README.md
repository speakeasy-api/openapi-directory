# accountMerchantLevel

### Available Operations

* [getMerchants](#getmerchants) - Get a list of merchant accounts
* [getMerchantsMerchantId](#getmerchantsmerchantid) - Get a merchant account
* [postMerchants](#postmerchants) - Create a merchant account
* [postMerchantsMerchantIdActivate](#postmerchantsmerchantidactivate) - Request to activate a merchant account

## getMerchants

Returns the list of merchant accounts that your API credential has access to. The list is grouped into pages as defined by the query parameters. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsRequest;
import org.openapis.openapi.models.operations.GetMerchantsResponse;
import org.openapis.openapi.models.operations.GetMerchantsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsRequest req = new GetMerchantsRequest() {{
                pageNumber = 222321;
                pageSize = 616934;
            }};            

            GetMerchantsResponse res = sdk.accountMerchantLevel.getMerchants(req, new GetMerchantsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listMerchantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantId

Returns the merchant account specified in the path. Your API credential must have access to the merchant account.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Account read

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdRequest req = new GetMerchantsMerchantIdRequest("laboriosam");            

            GetMerchantsMerchantIdResponse res = sdk.accountMerchantLevel.getMerchantsMerchantId(req, new GetMerchantsMerchantIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.merchant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchants

Creates a merchant account for the company account specified in the request.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Accounts read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsResponse;
import org.openapis.openapi.models.operations.PostMerchantsSecurity;
import org.openapis.openapi.models.shared.CreateMerchantRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateMerchantRequest req = new CreateMerchantRequest("hic") {{
                businessLineId = "saepe";
                description = "fuga";
                legalEntityId = "in";
                pricingPlan = "corporis";
                reference = "iste";
                salesChannels = new String[]{{
                    add("saepe"),
                    add("quidem"),
                }};
            }};            

            PostMerchantsResponse res = sdk.accountMerchantLevel.postMerchants(req, new PostMerchantsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createMerchantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdActivate

Sends a request to activate the merchant account identified in the path.

You get the result of the activation asychronously through a [`merchant.updated`](https://docs.adyen.com/api-explorer/ManagementNotification/latest/post/merchant.updated) webhook. Once the merchant account is activated, you can start using it to accept payments and payouts.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Accounts read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdActivateRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdActivateResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdActivateSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdActivateRequest req = new PostMerchantsMerchantIdActivateRequest("architecto");            

            PostMerchantsMerchantIdActivateResponse res = sdk.accountMerchantLevel.postMerchantsMerchantIdActivate(req, new PostMerchantsMerchantIdActivateSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.requestActivationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
