# displayAds

### Available Operations

* [getApiDisplayAds](#getapidisplayads) - display ads
* [getApiDisplayAdsId](#getapidisplayadsid) - display ad
* [postApiDisplayAds](#postapidisplayads) - display ads
* [putApiDisplayAdsId](#putapidisplayadsid) - display ads
* [putApiDisplayAdsIdUnpublish](#putapidisplayadsidunpublish) - unpublish

## getApiDisplayAds

This endpoint allows the client to retrieve a list of all display ads.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiDisplayAdsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiDisplayAdsResponse res = sdk.displayAds.getApiDisplayAds();

            if (res.displayAds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiDisplayAdsId

This endpoint allows the client to retrieve a single display ad, via its id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiDisplayAdsIdRequest;
import org.openapis.openapi.models.operations.GetApiDisplayAdsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiDisplayAdsIdRequest req = new GetApiDisplayAdsIdRequest(449950);            

            GetApiDisplayAdsIdResponse res = sdk.displayAds.getApiDisplayAdsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiDisplayAds

This endpoint allows the client to create a new display ad.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiDisplayAdsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("iure", "saepe");
                put("quidem", "architecto");
                put("ipsa", "reiciendis");
            }}            

            PostApiDisplayAdsResponse res = sdk.displayAds.postApiDisplayAds(req);

            if (res.postApiDisplayAds200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApiDisplayAdsId

This endpoint allows the client to update the attributes of a single display ad, via its id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApiDisplayAdsIdRequest;
import org.openapis.openapi.models.operations.PutApiDisplayAdsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutApiDisplayAdsIdRequest req = new PutApiDisplayAdsIdRequest(653140) {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dolores", "dolorem");
                    put("corporis", "explicabo");
                    put("nobis", "enim");
                }};
            }};            

            PutApiDisplayAdsIdResponse res = sdk.displayAds.putApiDisplayAdsId(req);

            if (res.putApiDisplayAdsId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApiDisplayAdsIdUnpublish

This endpoint allows the client to remove a display ad from rotation by un-publishing it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApiDisplayAdsIdUnpublishRequest;
import org.openapis.openapi.models.operations.PutApiDisplayAdsIdUnpublishResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutApiDisplayAdsIdUnpublishRequest req = new PutApiDisplayAdsIdUnpublishRequest(363711);            

            PutApiDisplayAdsIdUnpublishResponse res = sdk.displayAds.putApiDisplayAdsIdUnpublish(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
