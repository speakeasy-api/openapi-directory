# network

### Available Operations

* [getNetworks](#getnetworks) - Get a list of networks
* [getNetworksId](#getnetworksid) - Get a specific network

## getNetworks

### Deprecations

- The attribute `cover_image_id` has been replaced with the relationship `cover_image`
  and will be removed from the response in a future release.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworksAdDealStatusEnum;
import org.openapis.openapi.models.operations.GetNetworksRequest;
import org.openapis.openapi.models.operations.GetNetworksResponse;
import org.openapis.openapi.models.operations.GetNetworksSecurity;
import org.openapis.openapi.models.operations.GetNetworksSortEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNetworksRequest req = new GetNetworksRequest() {{
                adDealStatus = new org.openapis.openapi.models.operations.GetNetworksAdDealStatusEnum[]{{
                    add(GetNetworksAdDealStatusEnum.ACTIVE),
                    add(GetNetworksAdDealStatusEnum.INACTIVE),
                }};
                adRepAccountId = "f8d986e8-81ea-4d4f-8e10-12563f94e29e";
                ids = new String[]{{
                    add("73e922a5-7a15-4be3-a060-807e2b6e3ab8"),
                    add("845f0597-a60f-4f2a-94a3-1e94764a3e86"),
                    add("5e7956f9-251a-45a9-9a66-0ff57bfaad4f"),
                }};
                pageNumber = 564064L;
                pageSize = 889794L;
                q = "sapiente";
                sort = new org.openapis.openapi.models.operations.GetNetworksSortEnum[]{{
                    add(GetNetworksSortEnum.CREATED_AT),
                    add(GetNetworksSortEnum.UPDATED_AT),
                    add(GetNetworksSortEnum.CREATED_AT),
                    add(GetNetworksSortEnum.NAME),
                }};
            }};            

            GetNetworksResponse res = sdk.network.getNetworks(req, new GetNetworksSecurity("inventore") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getNetworks200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworksId

### Deprecations

- The attribute `cover_image_id` has been replaced with the relationship `cover_image`
  and will be removed from the response in a future release.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworksIdRequest;
import org.openapis.openapi.models.operations.GetNetworksIdResponse;
import org.openapis.openapi.models.operations.GetNetworksIdSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNetworksIdRequest req = new GetNetworksIdRequest("2c103264-8dc2-4f61-9199-ebfd0e9fe6c6");            

            GetNetworksIdResponse res = sdk.network.getNetworksId(req, new GetNetworksIdSecurity("dolorem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getNetworksId200ApplicationVndApiPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
