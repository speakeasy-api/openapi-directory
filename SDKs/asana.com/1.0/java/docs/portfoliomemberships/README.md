# portfolioMemberships

## Overview

This object determines if a user is a member of a portfolio.

### Available Operations

* [getPortfolioMembership](#getportfoliomembership) - Get a portfolio membership
* [getPortfolioMemberships](#getportfoliomemberships) - Get multiple portfolio memberships
* [getPortfolioMembershipsForPortfolio](#getportfoliomembershipsforportfolio) - Get memberships from a portfolio

## getPortfolioMembership

Returns the complete portfolio record for a single portfolio membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPortfolioMembershipRequest;
import org.openapis.openapi.models.operations.GetPortfolioMembershipResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPortfolioMembershipRequest req = new GetPortfolioMembershipRequest("ullam") {{
                optFields = new String[]{{
                    add("quos"),
                    add("sint"),
                    add("accusantium"),
                }};
                optPretty = false;
            }};            

            GetPortfolioMembershipResponse res = sdk.portfolioMemberships.getPortfolioMembership(req);

            if (res.getPortfolioMembership200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPortfolioMemberships

Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPortfolioMembershipsRequest;
import org.openapis.openapi.models.operations.GetPortfolioMembershipsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPortfolioMembershipsRequest req = new GetPortfolioMembershipsRequest() {{
                limit = 653201L;
                offset = "reiciendis";
                optFields = new String[]{{
                    add("ad"),
                    add("eum"),
                    add("dolor"),
                }};
                optPretty = false;
                portfolio = "necessitatibus";
                user = "odit";
                workspace = "nemo";
            }};            

            GetPortfolioMembershipsResponse res = sdk.portfolioMemberships.getPortfolioMemberships(req);

            if (res.getPortfolioMemberships200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPortfolioMembershipsForPortfolio

Returns the compact portfolio membership records for the portfolio.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPortfolioMembershipsForPortfolioRequest;
import org.openapis.openapi.models.operations.GetPortfolioMembershipsForPortfolioResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPortfolioMembershipsForPortfolioRequest req = new GetPortfolioMembershipsForPortfolioRequest("quasi") {{
                limit = 435865L;
                offset = "doloribus";
                optFields = new String[]{{
                    add("eius"),
                    add("maxime"),
                    add("deleniti"),
                    add("facilis"),
                }};
                optPretty = false;
                user = "in";
            }};            

            GetPortfolioMembershipsForPortfolioResponse res = sdk.portfolioMemberships.getPortfolioMembershipsForPortfolio(req);

            if (res.getPortfolioMembershipsForPortfolio200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
