# payoutSettingsMerchantLevel

### Available Operations

* [deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId](#deletemerchantsmerchantidpayoutsettingspayoutsettingsid) - Delete a payout setting
* [getMerchantsMerchantIdPayoutSettings](#getmerchantsmerchantidpayoutsettings) - Get a list of payout settings
* [getMerchantsMerchantIdPayoutSettingsPayoutSettingsId](#getmerchantsmerchantidpayoutsettingspayoutsettingsid) - Get a payout setting
* [patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId](#patchmerchantsmerchantidpayoutsettingspayoutsettingsid) - Update a payout setting
* [postMerchantsMerchantIdPayoutSettings](#postmerchantsmerchantidpayoutsettings) - Add a payout setting

## deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId

Deletes the payout setting identified in the path.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Payout account settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest;
import org.openapis.openapi.models.operations.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdResponse;
import org.openapis.openapi.models.operations.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest req = new DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest("iure", "odio");            

            DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdResponse res = sdk.payoutSettingsMerchantLevel.deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId(req, new DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity() {{
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

## getMerchantsMerchantIdPayoutSettings

Returns the list of payout settings for the merchant account identified in the path.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payout account settings read

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPayoutSettingsRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPayoutSettingsResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPayoutSettingsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdPayoutSettingsRequest req = new GetMerchantsMerchantIdPayoutSettingsRequest("quaerat");            

            GetMerchantsMerchantIdPayoutSettingsResponse res = sdk.payoutSettingsMerchantLevel.getMerchantsMerchantIdPayoutSettings(req, new GetMerchantsMerchantIdPayoutSettingsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.payoutSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdPayoutSettingsPayoutSettingsId

Returns the payout setting identified in the path.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payout account settings read

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest req = new GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest("accusamus", "quidem");            

            GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdResponse res = sdk.payoutSettingsMerchantLevel.getMerchantsMerchantIdPayoutSettingsPayoutSettingsId(req, new GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.payoutSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId

Updates the payout setting identified in the path. You can enable or disable the payout setting.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Payout account settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdResponse;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UpdatePayoutSettingsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest req = new PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest("voluptatibus", "voluptas") {{
                updatePayoutSettingsRequest = new UpdatePayoutSettingsRequest() {{
                    enabled = false;
                }};;
            }};            

            PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdResponse res = sdk.payoutSettingsMerchantLevel.patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId(req, new PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.payoutSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdPayoutSettings

Sends a request to add a payout setting for the merchant account specified in the path. A payout setting links the merchant account to the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments) that contains the details of the payout bank account. Adyen verifies the bank account before allowing and enabling the payout setting.

If you're accepting payments in multiple currencies, you may add multiple payout settings for the merchant account.

Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your Adyen contact will set up your access.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Payout account settings read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdPayoutSettingsRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdPayoutSettingsResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdPayoutSettingsSecurity;
import org.openapis.openapi.models.shared.PayoutSettingsRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdPayoutSettingsRequest req = new PostMerchantsMerchantIdPayoutSettingsRequest("natus") {{
                payoutSettingsRequest = new PayoutSettingsRequest("eos") {{
                    enabled = false;
                    enabledFromDate = "atque";
                }};;
            }};            

            PostMerchantsMerchantIdPayoutSettingsResponse res = sdk.payoutSettingsMerchantLevel.postMerchantsMerchantIdPayoutSettings(req, new PostMerchantsMerchantIdPayoutSettingsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.payoutSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
