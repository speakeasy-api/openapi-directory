# ratings

## Overview

Team rating data

### Available Operations

* [getConferenceSPRatings](#getconferencespratings) - Historical SP+ ratings by conference
* [getEloRatings](#geteloratings) - Historical Elo ratings
* [getSPRatings](#getspratings) - Historical SP+ ratings
* [getSRSRatings](#getsrsratings) - Historical SRS ratings

## getConferenceSPRatings

Get average SP+ historical rating data by conference

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConferenceSPRatingsRequest;
import org.openapis.openapi.models.operations.GetConferenceSPRatingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConferenceSPRatingsRequest req = new GetConferenceSPRatingsRequest() {{
                conference = "labore";
                year = 264730L;
            }};            

            GetConferenceSPRatingsResponse res = sdk.ratings.getConferenceSPRatings(req);

            if (res.conferenceSPRatings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEloRatings

Elo rating data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEloRatingsRequest;
import org.openapis.openapi.models.operations.GetEloRatingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEloRatingsRequest req = new GetEloRatingsRequest() {{
                conference = "aliquid";
                team = "cupiditate";
                week = 552822L;
                year = 20107L;
            }};            

            GetEloRatingsResponse res = sdk.ratings.getEloRatings(req);

            if (res.teamEloRatings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSPRatings

SP+ rating data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSPRatingsRequest;
import org.openapis.openapi.models.operations.GetSPRatingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSPRatingsRequest req = new GetSPRatingsRequest() {{
                team = "assumenda";
                year = 369808L;
            }};            

            GetSPRatingsResponse res = sdk.ratings.getSPRatings(req);

            if (res.teamSPRatings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSRSRatings

SRS rating data (requires either a year or team specified)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSRSRatingsRequest;
import org.openapis.openapi.models.operations.GetSRSRatingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSRSRatingsRequest req = new GetSRSRatingsRequest() {{
                conference = "fugit";
                team = "dolorum";
                year = 569618L;
            }};            

            GetSRSRatingsResponse res = sdk.ratings.getSRSRatings(req);

            if (res.teamSRSRatings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
