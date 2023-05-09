# feeEstimation

## Overview

 

### Available Operations

* [getEstimateFeeV2](#getestimatefeev2) - Estimate transaction fee V2

## getEstimateFeeV2

Returns an estimated transaction fee for a specific confirmation target.
If you want your transaction to be included in the next block, then you give 1 as parameter. If it is not urgent, then you can wait a bit longer and get an estimation for the fifth next block.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEstimateFeeV2Request;
import org.openapis.openapi.models.operations.GetEstimateFeeV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("vel") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetEstimateFeeV2Request req = new GetEstimateFeeV2Request("bitcoin", 1L);            

            GetEstimateFeeV2Response res = sdk.feeEstimation.getEstimateFeeV2(req);

            if (res.getEstimateFeeV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
