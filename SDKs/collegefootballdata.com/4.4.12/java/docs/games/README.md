# games

## Overview

Games scores and statistics

### Available Operations

* [getAdvancedBoxScore](#getadvancedboxscore) - Advanced box scores
* [getCalendar](#getcalendar) - Season calendar
* [getGameMedia](#getgamemedia) - Game media information and schedules
* [getGameWeather](#getgameweather) - Game weather information (Patreon only)
* [getGames](#getgames) - Games and results
* [getPlayerGameStats](#getplayergamestats) - Player game stats
* [getScoreboard](#getscoreboard) - Live game results (Patreon only)
* [getTeamGameStats](#getteamgamestats) - Team game stats
* [getTeamRecords](#getteamrecords) - Team records

## getAdvancedBoxScore

Get advanced box score data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdvancedBoxScoreRequest;
import org.openapis.openapi.models.operations.GetAdvancedBoxScoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAdvancedBoxScoreRequest req = new GetAdvancedBoxScoreRequest(780529L);            

            GetAdvancedBoxScoreResponse res = sdk.games.getAdvancedBoxScore(req);

            if (res.boxScore != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCalendar

Get calendar of weeks by season

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCalendarRequest;
import org.openapis.openapi.models.operations.GetCalendarResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCalendarRequest req = new GetCalendarRequest(118274L);            

            GetCalendarResponse res = sdk.games.getCalendar(req);

            if (res.weeks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGameMedia

Game media information (TV, radio, etc)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGameMediaRequest;
import org.openapis.openapi.models.operations.GetGameMediaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGameMediaRequest req = new GetGameMediaRequest(639921L) {{
                classification = "occaecati";
                conference = "fugit";
                mediaType = "deleniti";
                seasonType = "hic";
                team = "optio";
                week = 521848L;
            }};            

            GetGameMediaResponse res = sdk.games.getGameMedia(req);

            if (res.gameMedias != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGameWeather

Weather information for the hour of kickoff

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGameWeatherRequest;
import org.openapis.openapi.models.operations.GetGameWeatherResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGameWeatherRequest req = new GetGameWeatherRequest() {{
                classification = "commodi";
                conference = "molestiae";
                gameId = 264555L;
                seasonType = "qui";
                team = "impedit";
                week = 736918L;
                year = 456150L;
            }};            

            GetGameWeatherResponse res = sdk.games.getGameWeather(req);

            if (res.gameWeathers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGames

Get game results

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGamesRequest;
import org.openapis.openapi.models.operations.GetGamesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGamesRequest req = new GetGamesRequest(568434L) {{
                away = "aspernatur";
                conference = "perferendis";
                division = "ad";
                home = "natus";
                id = 149675L;
                seasonType = "iste";
                team = "dolor";
                week = 616934L;
            }};            

            GetGamesResponse res = sdk.games.getGames(req);

            if (res.games != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlayerGameStats

Player stats broken down by game

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlayerGameStatsRequest;
import org.openapis.openapi.models.operations.GetPlayerGameStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlayerGameStatsRequest req = new GetPlayerGameStatsRequest(943749L) {{
                category = "saepe";
                conference = "fuga";
                gameId = 449950L;
                seasonType = "corporis";
                team = "iste";
                week = 437032L;
            }};            

            GetPlayerGameStatsResponse res = sdk.games.getPlayerGameStats(req);

            if (res.playerGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScoreboard

Get live game results

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScoreboardRequest;
import org.openapis.openapi.models.operations.GetScoreboardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetScoreboardRequest req = new GetScoreboardRequest() {{
                classification = "quidem";
                conference = "architecto";
            }};            

            GetScoreboardResponse res = sdk.games.getScoreboard(req);

            if (res.scoreboardGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamGameStats

Team stats broken down by game

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamGameStatsRequest;
import org.openapis.openapi.models.operations.GetTeamGameStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTeamGameStatsRequest req = new GetTeamGameStatsRequest(969810L) {{
                classification = "est";
                conference = "mollitia";
                gameId = 670638L;
                seasonType = "dolores";
                team = "dolorem";
                week = 358152L;
            }};            

            GetTeamGameStatsResponse res = sdk.games.getTeamGameStats(req);

            if (res.teamGames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamRecords

Get team records by year

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamRecordsRequest;
import org.openapis.openapi.models.operations.GetTeamRecordsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTeamRecordsRequest req = new GetTeamRecordsRequest() {{
                conference = "nobis";
                team = "enim";
                year = 607831L;
            }};            

            GetTeamRecordsResponse res = sdk.games.getTeamRecords(req);

            if (res.teamRecords != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
