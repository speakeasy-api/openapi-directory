# players

## Overview

Player information and data

### Available Operations

* [getPlayerSeasonStats](#getplayerseasonstats) - Player stats by season
* [getPlayerUsage](#getplayerusage) - Player usage metrics broken down by season
* [getReturningProduction](#getreturningproduction) - Team returning production metrics
* [getTransferPortal](#gettransferportal) - Transfer portal by season
* [playerSearch](#playersearch) - Search for player information

## getPlayerSeasonStats

Season player stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlayerSeasonStatsRequest;
import org.openapis.openapi.models.operations.GetPlayerSeasonStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlayerSeasonStatsRequest req = new GetPlayerSeasonStatsRequest(97101L) {{
                category = "error";
                conference = "temporibus";
                endWeek = 673660L;
                seasonType = "quasi";
                startWeek = 971945L;
                team = "voluptatibus";
            }};            

            GetPlayerSeasonStatsResponse res = sdk.players.getPlayerSeasonStats(req);

            if (res.playerSeasonStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlayerUsage

Player usage metrics by season

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlayerUsageRequest;
import org.openapis.openapi.models.operations.GetPlayerUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlayerUsageRequest req = new GetPlayerUsageRequest(468651L) {{
                conference = "praesentium";
                excludeGarbageTime = false;
                playerId = 976762L;
                position = "ipsa";
                team = "omnis";
            }};            

            GetPlayerUsageResponse res = sdk.players.getPlayerUsage(req);

            if (res.playerUsages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReturningProduction

Returning production metrics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReturningProductionRequest;
import org.openapis.openapi.models.operations.GetReturningProductionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReturningProductionRequest req = new GetReturningProductionRequest() {{
                conference = "cum";
                team = "perferendis";
                year = 39187L;
            }};            

            GetReturningProductionResponse res = sdk.players.getReturningProduction(req);

            if (res.returningProductions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransferPortal

Transfer portal by season

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransferPortalRequest;
import org.openapis.openapi.models.operations.GetTransferPortalResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransferPortalRequest req = new GetTransferPortalRequest(282807L);            

            GetTransferPortalResponse res = sdk.players.getTransferPortal(req);

            if (res.portalPlayers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playerSearch

Search for players

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayerSearchRequest;
import org.openapis.openapi.models.operations.PlayerSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlayerSearchRequest req = new PlayerSearchRequest("dicta") {{
                position = "corporis";
                team = "dolore";
                year = 480894L;
            }};            

            PlayerSearchResponse res = sdk.players.playerSearch(req);

            if (res.playerSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
