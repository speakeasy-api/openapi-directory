# fireteam

## Overview

fireteam

### Available Operations

* [fireteamGetActivePrivateClanFireteamCount](#fireteamgetactiveprivateclanfireteamcount) - Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
* [fireteamGetAvailableClanFireteams](#fireteamgetavailableclanfireteams) - Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
* [fireteamGetClanFireteam](#fireteamgetclanfireteam) - Gets a specific fireteam.
* [fireteamGetMyClanFireteams](#fireteamgetmyclanfireteams) - Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
* [fireteamSearchPublicAvailableClanFireteams](#fireteamsearchpublicavailableclanfireteams) - Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.

## fireteamGetActivePrivateClanFireteamCount

Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FireteamGetActivePrivateClanFireteamCountRequest;
import org.openapis.openapi.models.operations.FireteamGetActivePrivateClanFireteamCountResponse;
import org.openapis.openapi.models.operations.FireteamGetActivePrivateClanFireteamCountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FireteamGetActivePrivateClanFireteamCountRequest req = new FireteamGetActivePrivateClanFireteamCountRequest(296140L);            

            FireteamGetActivePrivateClanFireteamCountResponse res = sdk.fireteam.fireteamGetActivePrivateClanFireteamCount(req, new FireteamGetActivePrivateClanFireteamCountSecurity("iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fireteamGetAvailableClanFireteams

Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FireteamGetAvailableClanFireteamsRequest;
import org.openapis.openapi.models.operations.FireteamGetAvailableClanFireteamsResponse;
import org.openapis.openapi.models.operations.FireteamGetAvailableClanFireteamsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FireteamGetAvailableClanFireteamsRequest req = new FireteamGetAvailableClanFireteamsRequest(118727, 688661L, 317983L, 880476, 414263L, 918236L, 64147L) {{
                excludeImmediate = false;
                langFilter = "ipsum";
            }};            

            FireteamGetAvailableClanFireteamsResponse res = sdk.fireteam.fireteamGetAvailableClanFireteams(req, new FireteamGetAvailableClanFireteamsSecurity("quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fireteamGetClanFireteam

Gets a specific fireteam.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FireteamGetClanFireteamRequest;
import org.openapis.openapi.models.operations.FireteamGetClanFireteamResponse;
import org.openapis.openapi.models.operations.FireteamGetClanFireteamSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FireteamGetClanFireteamRequest req = new FireteamGetClanFireteamRequest(565189L, 566602L);            

            FireteamGetClanFireteamResponse res = sdk.fireteam.fireteamGetClanFireteam(req, new FireteamGetClanFireteamSecurity("pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fireteamGetMyClanFireteams

Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FireteamGetMyClanFireteamsRequest;
import org.openapis.openapi.models.operations.FireteamGetMyClanFireteamsResponse;
import org.openapis.openapi.models.operations.FireteamGetMyClanFireteamsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FireteamGetMyClanFireteamsRequest req = new FireteamGetMyClanFireteamsRequest(265389L, false, 508969, 523248L) {{
                groupFilter = false;
                langFilter = "voluptates";
            }};            

            FireteamGetMyClanFireteamsResponse res = sdk.fireteam.fireteamGetMyClanFireteams(req, new FireteamGetMyClanFireteamsSecurity("quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fireteamSearchPublicAvailableClanFireteams

Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FireteamSearchPublicAvailableClanFireteamsRequest;
import org.openapis.openapi.models.operations.FireteamSearchPublicAvailableClanFireteamsResponse;
import org.openapis.openapi.models.operations.FireteamSearchPublicAvailableClanFireteamsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FireteamSearchPublicAvailableClanFireteamsRequest req = new FireteamSearchPublicAvailableClanFireteamsRequest(921158, 575947L, 83112, 929297L, 277718L) {{
                excludeImmediate = false;
                langFilter = "enim";
            }};            

            FireteamSearchPublicAvailableClanFireteamsResponse res = sdk.fireteam.fireteamSearchPublicAvailableClanFireteams(req, new FireteamSearchPublicAvailableClanFireteamsSecurity("consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
