# plays

## Overview

Play by play data

### Available Operations

* [getLivePlays](#getliveplays) - Live metrics and PBP (Patreon only)
* [getPlayStatTypes](#getplaystattypes) - Types of player play stats
* [getPlayStats](#getplaystats) - Play stats by play
* [getPlayTypes](#getplaytypes) - Play types
* [getPlays](#getplays) - Play by play data

## getLivePlays

Get live metrics and PBP

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLivePlaysRequest;
import org.openapis.openapi.models.operations.GetLivePlaysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLivePlaysRequest req = new GetLivePlaysRequest(688661L);            

            GetLivePlaysResponse res = sdk.plays.getLivePlays(req);

            if (res.livePlayByPlay != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlayStatTypes

Type of play stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlayStatTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlayStatTypesResponse res = sdk.plays.getPlayStatTypes();

            if (res.playStatTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlayStats

Gets player stats associated by play (limit 1000)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlayStatsRequest;
import org.openapis.openapi.models.operations.GetPlayStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlayStatsRequest req = new GetPlayStatsRequest() {{
                athleteId = 414263L;
                conference = "repudiandae";
                gameId = 64147L;
                seasonType = "ipsum";
                statTypeId = 692472L;
                team = "molestias";
                week = 566602L;
                year = 865103L;
            }};            

            GetPlayStatsResponse res = sdk.plays.getPlayStats(req);

            if (res.playStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlayTypes

Types of plays

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlayTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlayTypesResponse res = sdk.plays.getPlayTypes();

            if (res.playTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlays

Get play data and results

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlaysRequest;
import org.openapis.openapi.models.operations.GetPlaysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlaysRequest req = new GetPlaysRequest(523248L, 916723L) {{
                classification = "quasi";
                conference = "repudiandae";
                defense = "sint";
                defenseConference = "veritatis";
                offense = "itaque";
                offenseConference = "incidunt";
                playType = 318569L;
                seasonType = "consequatur";
                team = "est";
            }};            

            GetPlaysResponse res = sdk.plays.getPlays(req);

            if (res.plays != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
