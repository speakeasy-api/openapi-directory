# businessLines

### Available Operations

* [deleteBusinessLinesId](#deletebusinesslinesid) - Delete a business line
* [getBusinessLinesId](#getbusinesslinesid) - Get a business line
* [postBusinessLines](#postbusinesslines) - Create a business line

## deleteBusinessLinesId

Deletes a business line.

 >If you delete a business line linked to a [payment method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it can affect your merchant account's ability to use the [payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings). The business line is removed from all linked merchant accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBusinessLinesIdRequest;
import org.openapis.openapi.models.operations.DeleteBusinessLinesIdResponse;
import org.openapis.openapi.models.operations.DeleteBusinessLinesIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBusinessLinesIdRequest req = new DeleteBusinessLinesIdRequest("provident");            

            DeleteBusinessLinesIdResponse res = sdk.businessLines.deleteBusinessLinesId(req, new DeleteBusinessLinesIdSecurity() {{
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

## getBusinessLinesId

Returns the detail of a business line.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBusinessLinesIdRequest;
import org.openapis.openapi.models.operations.GetBusinessLinesIdResponse;
import org.openapis.openapi.models.operations.GetBusinessLinesIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBusinessLinesIdRequest req = new GetBusinessLinesIdRequest("distinctio");            

            GetBusinessLinesIdResponse res = sdk.businessLines.getBusinessLinesId(req, new GetBusinessLinesIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.businessLine != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBusinessLines

Creates a business line. 

This resource contains information about your user's line of business, including their industry and their source of funds. Adyen uses this information to verify your users as required by payment industry regulations. Adyen informs you of the verification results through webhooks or API responses.>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBusinessLinesResponse;
import org.openapis.openapi.models.operations.PostBusinessLinesSecurity;
import org.openapis.openapi.models.shared.BusinessLineInfoInput;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SourceOfFunds;
import org.openapis.openapi.models.shared.SourceOfFundsTypeEnum;
import org.openapis.openapi.models.shared.WebDataExemption;
import org.openapis.openapi.models.shared.WebDataExemptionReasonEnum;
import org.openapis.openapi.models.shared.WebDataInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BusinessLineInfoInput req = new BusinessLineInfoInput("quibusdam", "unde", "nulla") {{
                salesChannels = new String[]{{
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
                sourceOfFunds = new SourceOfFunds() {{
                    acquiringBusinessLineId = "deserunt";
                    adyenProcessedFunds = false;
                    description = "suscipit";
                    type = SourceOfFundsTypeEnum.BUSINESS;
                }};;
                webData = new org.openapis.openapi.models.shared.WebDataInput[]{{
                    add(new WebDataInput() {{
                        webAddress = "magnam";
                    }}),
                    add(new WebDataInput() {{
                        webAddress = "debitis";
                    }}),
                }};
                webDataExemption = new WebDataExemption() {{
                    reason = WebDataExemptionReasonEnum.NO_ONLINE_PRESENCE;
                }};;
            }};            

            PostBusinessLinesResponse res = sdk.businessLines.postBusinessLines(req, new PostBusinessLinesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.businessLine != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
