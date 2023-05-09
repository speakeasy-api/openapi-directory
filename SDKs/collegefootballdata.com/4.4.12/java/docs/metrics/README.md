# metrics

## Overview

Data relating to Predicted Points and other metrics

### Available Operations

* [getGamePPA](#getgameppa) - Team Predicated Points Added (PPA/EPA) by game
* [getPlayerGamePPA](#getplayergameppa) - Player Predicated Points Added (PPA/EPA) broken down by game
* [getPlayerSeasonPPA](#getplayerseasonppa) - Player Predicated Points Added (PPA/EPA) broken down by season
* [getPredictedPoints](#getpredictedpoints) - Predicted Points (i.e. Expected Points or EP)
* [getPregameWinProbabilities](#getpregamewinprobabilities) - Pregame win probability data
* [getTeamPPA](#getteamppa) - Predicted Points Added (PPA/EPA) data by team
* [getWinProbabilityData](#getwinprobabilitydata) - Win probability chart data

## getGamePPA

Predicted Points Added (PPA) by game

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGamePPARequest;
import org.openapis.openapi.models.operations.GetGamePPAResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGamePPARequest req = new GetGamePPARequest(325047L) {{
                conference = "excepturi";
                excludeGarbageTime = false;
                seasonType = "accusantium";
                team = "iure";
                week = 634274L;
            }};            

            GetGamePPAResponse res = sdk.metrics.getGamePPA(req);

            if (res.gamePPAS != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlayerGamePPA

Predicted Points Added (PPA) by player game

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlayerGamePPARequest;
import org.openapis.openapi.models.operations.GetPlayerGamePPAResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlayerGamePPARequest req = new GetPlayerGamePPARequest() {{
                excludeGarbageTime = false;
                playerId = 958950L;
                position = "architecto";
                seasonType = "mollitia";
                team = "dolorem";
                threshold = "culpa";
                week = 161309L;
                year = 995300L;
            }};            

            GetPlayerGamePPAResponse res = sdk.metrics.getPlayerGamePPA(req);

            if (res.playerGamePPAS != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlayerSeasonPPA

Predicted Points Added (PPA) by player season

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlayerSeasonPPARequest;
import org.openapis.openapi.models.operations.GetPlayerSeasonPPAResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPlayerSeasonPPARequest req = new GetPlayerSeasonPPARequest() {{
                conference = "occaecati";
                excludeGarbageTime = false;
                playerId = 253291L;
                position = "commodi";
                team = "quam";
                threshold = "molestiae";
                year = 244425L;
            }};            

            GetPlayerSeasonPPAResponse res = sdk.metrics.getPlayerSeasonPPA(req);

            if (res.playerSeasonPPAS != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPredictedPoints

Predicted Points

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPredictedPointsRequest;
import org.openapis.openapi.models.operations.GetPredictedPointsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPredictedPointsRequest req = new GetPredictedPointsRequest(158969L, 338007L);            

            GetPredictedPointsResponse res = sdk.metrics.getPredictedPoints(req);

            if (res.predictedPoints != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPregameWinProbabilities

Pregame win probabilities

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPregameWinProbabilitiesRequest;
import org.openapis.openapi.models.operations.GetPregameWinProbabilitiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPregameWinProbabilitiesRequest req = new GetPregameWinProbabilitiesRequest() {{
                seasonType = "laborum";
                team = "animi";
                week = 317202L;
                year = 138183L;
            }};            

            GetPregameWinProbabilitiesResponse res = sdk.metrics.getPregameWinProbabilities(req);

            if (res.pregameWPS != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamPPA

Predicted Points Added (PPA)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamPPARequest;
import org.openapis.openapi.models.operations.GetTeamPPAResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTeamPPARequest req = new GetTeamPPARequest() {{
                conference = "sequi";
                excludeGarbageTime = false;
                team = "tenetur";
                year = 368725L;
            }};            

            GetTeamPPAResponse res = sdk.metrics.getTeamPPA(req);

            if (res.teamPPAS != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWinProbabilityData

Win probability data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWinProbabilityDataRequest;
import org.openapis.openapi.models.operations.GetWinProbabilityDataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWinProbabilityDataRequest req = new GetWinProbabilityDataRequest(820994L);            

            GetWinProbabilityDataResponse res = sdk.metrics.getWinProbabilityData(req);

            if (res.playWPS != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
