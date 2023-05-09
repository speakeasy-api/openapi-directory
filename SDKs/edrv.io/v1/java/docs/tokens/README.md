# tokens

### Available Operations

* [deleteToken](#deletetoken) - Use to delete a token
* [getToken](#gettoken) - Get a single token's data
* [getTokens](#gettokens) - List tokens
* [patchToken](#patchtoken) - Update a token
* [postTokens](#posttokens) - Create a new token

## deleteToken

Use to delete a token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTokenRequest;
import org.openapis.openapi.models.operations.DeleteTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteTokenRequest req = new DeleteTokenRequest("nam");            

            DeleteTokenResponse res = sdk.tokens.deleteToken(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getToken

Get a single token's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTokenRequest;
import org.openapis.openapi.models.operations.GetTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTokenRequest req = new GetTokenRequest("voluptatem") {{
                includeDriver = false;
                includeOrganization = false;
            }};            

            GetTokenResponse res = sdk.tokens.getToken(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTokens

List tokens

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTokensRequest;
import org.openapis.openapi.models.operations.GetTokensResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrder1Enum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTokensRequest req = new GetTokensRequest() {{
                createdAtDollarGte = OffsetDateTime.parse("2021-07-03T11:24:47.623Z");
                createdAtDollarLte = OffsetDateTime.parse("2022-02-05T03:24:54.198Z");
                includeDriver = false;
                includeOrganization = false;
                paginateEnabled = false;
                paginateLimit = 217450L;
                paginatePage = "veritatis";
                sortBy = "nobis";
                sortOrder = SortOrder1Enum.ASC;
                updatedAtDollarGte = OffsetDateTime.parse("2021-10-31T07:58:44.750Z");
                updatedAtDollarLte = OffsetDateTime.parse("2022-01-14T21:26:14.171Z");
            }};            

            GetTokensResponse res = sdk.tokens.getTokens(req);

            if (res.getTokens200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchToken

Update a token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchTokenRequest;
import org.openapis.openapi.models.operations.PatchTokenRequestBody;
import org.openapis.openapi.models.operations.PatchTokenRequestBodyChannelEnum;
import org.openapis.openapi.models.operations.PatchTokenResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PatchTokenRequest req = new PatchTokenRequest(                new PatchTokenRequestBody() {{
                                active = false;
                                channel = PatchTokenRequestBodyChannelEnum.SLACK;
                                driver = "labore";
                                physicalId = "adipisci";
                                type = "dolorum";
                            }};, "architecto");            

            PatchTokenResponse res = sdk.tokens.patchToken(req);

            if (res.patchToken201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTokens

Create a new token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTokensRequestBody;
import org.openapis.openapi.models.operations.PostTokensRequestBodyChannelEnum;
import org.openapis.openapi.models.operations.PostTokensResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostTokensRequestBody req = new PostTokensRequestBody(false, PostTokensRequestBodyChannelEnum.PHYSICAL, "quas", "itaque") {{
                type = "consequatur";
            }};            

            PostTokensResponse res = sdk.tokens.postTokens(req);

            if (res.postTokens201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
