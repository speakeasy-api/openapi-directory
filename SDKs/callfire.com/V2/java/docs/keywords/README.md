# keywords

### Available Operations

* [findKeywordLeaseConfigs](#findkeywordleaseconfigs) - Find keyword lease configs
* [findKeywordLeases](#findkeywordleases) - Find keyword leases
* [findKeywords](#findkeywords) - Find keywords
* [getKeywordLease](#getkeywordlease) - Find a specific lease
* [getKeywordLeaseById](#getkeywordleasebyid) - Find a keyword by id
* [getKeywordLeaseConfig](#getkeywordleaseconfig) - Find a specific keyword lease config
* [isKeywordAvailable](#iskeywordavailable) - Check for a specific keyword
* [updateKeywordLease](#updatekeywordlease) - Update a lease
* [updateKeywordLeaseConfig](#updatekeywordleaseconfig) - Update a keyword lease config

## findKeywordLeaseConfigs

Searches for all keyword lease configs for the user. Returns a paged list of KeywordConfig

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindKeywordLeaseConfigsRequest;
import org.openapis.openapi.models.operations.FindKeywordLeaseConfigsResponse;
import org.openapis.openapi.models.operations.FindKeywordLeaseConfigsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindKeywordLeaseConfigsRequest req = new FindKeywordLeaseConfigsRequest() {{
                fields = "cum";
                filter = "commodi";
                labelName = "in";
                limit = 360545;
                offset = 968904;
            }};            

            FindKeywordLeaseConfigsResponse res = sdk.keywords.findKeywordLeaseConfigs(req, new FindKeywordLeaseConfigsSecurity("assumenda", "nemo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findKeywordLeases

Searches for all keywords owned by user. A keyword lease is the ownership information involving a keyword

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindKeywordLeasesRequest;
import org.openapis.openapi.models.operations.FindKeywordLeasesResponse;
import org.openapis.openapi.models.operations.FindKeywordLeasesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindKeywordLeasesRequest req = new FindKeywordLeasesRequest() {{
                fields = "recusandae";
                filter = "aliquid";
                labelName = "aperiam";
                limit = 738683;
                offset = 232627;
            }};            

            FindKeywordLeasesResponse res = sdk.keywords.findKeywordLeases(req, new FindKeywordLeasesSecurity("in", "exercitationem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.keywordLeasePage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findKeywords

Searches for all keywords available for purchase on the CallFire platform. If a keyword appears in the response, it is available for purchase. List the 'keywords' in a query parameter to search for multiple keywords (at least one keyword should be sent in request). Keyword should only consist of uppercase and lowercase letters and numbers. Number of characters must be greater than 2, but less than 65.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindKeywordsRequest;
import org.openapis.openapi.models.operations.FindKeywordsResponse;
import org.openapis.openapi.models.operations.FindKeywordsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindKeywordsRequest req = new FindKeywordsRequest() {{
                keywords = new String[]{{
                    add("facere"),
                    add("numquam"),
                    add("doloribus"),
                    add("suscipit"),
                }};
            }};            

            FindKeywordsResponse res = sdk.keywords.findKeywords(req, new FindKeywordsSecurity("reiciendis", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.keywordList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeywordLease

Searches for all keywords owned by user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeywordLeaseRequest;
import org.openapis.openapi.models.operations.GetKeywordLeaseResponse;
import org.openapis.openapi.models.operations.GetKeywordLeaseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetKeywordLeaseRequest req = new GetKeywordLeaseRequest("saepe") {{
                fields = "necessitatibus";
            }};            

            GetKeywordLeaseResponse res = sdk.keywords.getKeywordLease(req, new GetKeywordLeaseSecurity("dolore", "sunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.keywordLease != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeywordLeaseById

Get keyword by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeywordLeaseByIdRequest;
import org.openapis.openapi.models.operations.GetKeywordLeaseByIdResponse;
import org.openapis.openapi.models.operations.GetKeywordLeaseByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetKeywordLeaseByIdRequest req = new GetKeywordLeaseByIdRequest(992012L) {{
                fields = "adipisci";
            }};            

            GetKeywordLeaseByIdResponse res = sdk.keywords.getKeywordLeaseById(req, new GetKeywordLeaseByIdSecurity("non", "amet") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.keywordLease != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeywordLeaseConfig

Returns a single KeywordConfig instance for a given keyword lease

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeywordLeaseConfigRequest;
import org.openapis.openapi.models.operations.GetKeywordLeaseConfigResponse;
import org.openapis.openapi.models.operations.GetKeywordLeaseConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetKeywordLeaseConfigRequest req = new GetKeywordLeaseConfigRequest("beatae") {{
                fields = "dignissimos";
            }};            

            GetKeywordLeaseConfigResponse res = sdk.keywords.getKeywordLeaseConfig(req, new GetKeywordLeaseConfigSecurity("a", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.keywordConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## isKeywordAvailable

Searches for the specific keyword to purchase on the CallFire platform. Returns 'true' if keyword is available. Keyword should only consist of uppercase and lowercase letters and numbers. Number of characters must be greater than 2, but less than 65.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IsKeywordAvailableRequest;
import org.openapis.openapi.models.operations.IsKeywordAvailableResponse;
import org.openapis.openapi.models.operations.IsKeywordAvailableSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IsKeywordAvailableRequest req = new IsKeywordAvailableRequest("consectetur");            

            IsKeywordAvailableResponse res = sdk.keywords.isKeywordAvailable(req, new IsKeywordAvailableSecurity("corporis", "harum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.isKeywordAvailable200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateKeywordLease

Updates a keyword lease. Turns the autoRenew on/off. Configure double opt in feature. Add/remove contact list from keyword.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateKeywordLeaseRequest;
import org.openapis.openapi.models.operations.UpdateKeywordLeaseResponse;
import org.openapis.openapi.models.operations.UpdateKeywordLeaseSecurity;
import org.openapis.openapi.models.shared.KeywordLease;
import org.openapis.openapi.models.shared.KeywordLeaseStatusEnum;
import org.openapis.openapi.models.shared.KeywordLeaseTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateKeywordLeaseRequest req = new UpdateKeywordLeaseRequest("laboriosam") {{
                keywordLease = new KeywordLease() {{
                    autoRenew = false;
                    contactListId = 58356L;
                    doubleOptInEnabled = false;
                    keyword = "voluptates";
                    labels = new String[]{{
                        add("vitae"),
                        add("accusamus"),
                        add("similique"),
                    }};
                    leaseBegin = 272437L;
                    leaseEnd = 132815L;
                    number = "voluptas";
                    optInConfirmationMessage = "voluptas";
                    shortCode = "voluptas";
                    status = KeywordLeaseStatusEnum.ACTIVE;
                    type = KeywordLeaseTypeEnum.EXTRA;
                }};;
            }};            

            UpdateKeywordLeaseResponse res = sdk.keywords.updateKeywordLease(req, new UpdateKeywordLeaseSecurity("dolorum", "adipisci") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## updateKeywordLeaseConfig

Updates a keyword lease configuration. Use this API endpoint to enable/disable inbound SMS forwarding, set forward number. Forward number must be in E.164 format)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateKeywordLeaseConfigRequest;
import org.openapis.openapi.models.operations.UpdateKeywordLeaseConfigResponse;
import org.openapis.openapi.models.operations.UpdateKeywordLeaseConfigSecurity;
import org.openapis.openapi.models.shared.KeywordConfig;
import org.openapis.openapi.models.shared.TextInboundConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateKeywordLeaseConfigRequest req = new UpdateKeywordLeaseConfigRequest("minus") {{
                keywordConfig = new KeywordConfig() {{
                    keyword = "dolores";
                    textInboundConfig = new TextInboundConfig() {{
                        forwardEnabled = false;
                        forwardNumber = "blanditiis";
                    }};;
                }};;
            }};            

            UpdateKeywordLeaseConfigResponse res = sdk.keywords.updateKeywordLeaseConfig(req, new UpdateKeywordLeaseConfigSecurity("in", "dolore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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
