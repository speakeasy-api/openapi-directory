# stats

## Overview

Statistical data

### Available Operations

* [getAdvancedTeamGameStats](#getadvancedteamgamestats) - Advanced team metrics by game
* [getAdvancedTeamSeasonStats](#getadvancedteamseasonstats) - Advanced team metrics by season
* [getStatCategories](#getstatcategories) - Team stat categories
* [getTeamSeasonStats](#getteamseasonstats) - Team statistics by season

## getAdvancedTeamGameStats

Advanced team game stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdvancedTeamGameStatsRequest;
import org.openapis.openapi.models.operations.GetAdvancedTeamGameStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAdvancedTeamGameStatsRequest req = new GetAdvancedTeamGameStatsRequest() {{
                excludeGarbageTime = false;
                opponent = "debitis";
                seasonType = "a";
                team = "dolorum";
                week = 447125L;
                year = 449198L;
            }};            

            GetAdvancedTeamGameStatsResponse res = sdk.stats.getAdvancedTeamGameStats(req);

            if (res.advancedGameStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAdvancedTeamSeasonStats

Advanced team season stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdvancedTeamSeasonStatsRequest;
import org.openapis.openapi.models.operations.GetAdvancedTeamSeasonStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAdvancedTeamSeasonStatsRequest req = new GetAdvancedTeamSeasonStatsRequest() {{
                endWeek = 978571L;
                excludeGarbageTime = false;
                startWeek = 699479L;
                team = "dicta";
                year = 297437L;
            }};            

            GetAdvancedTeamSeasonStatsResponse res = sdk.stats.getAdvancedTeamSeasonStats(req);

            if (res.advancedSeasonStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatCategories

Stat category list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetStatCategoriesResponse res = sdk.stats.getStatCategories();

            if (res.getStatCategories200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamSeasonStats

Team season stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamSeasonStatsRequest;
import org.openapis.openapi.models.operations.GetTeamSeasonStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTeamSeasonStatsRequest req = new GetTeamSeasonStatsRequest() {{
                conference = "ea";
                endWeek = 396506L;
                startWeek = 675439L;
                team = "accusamus";
                year = 249796L;
            }};            

            GetTeamSeasonStatsResponse res = sdk.stats.getTeamSeasonStats(req);

            if (res.teamSeasonStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
