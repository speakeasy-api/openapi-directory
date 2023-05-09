# preview

### Available Operations

* [destiny2GetClanAggregateStats](#destiny2getclanaggregatestats) - Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [destiny2GetClanLeaderboards](#destiny2getclanleaderboards) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [destiny2GetLeaderboards](#destiny2getleaderboards) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
* [destiny2GetLeaderboardsForCharacter](#destiny2getleaderboardsforcharacter) - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* [destiny2GetPublicVendors](#destiny2getpublicvendors) - Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
* [destiny2InsertSocketPlug](#destiny2insertsocketplug) - Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
* [destiny2InsertSocketPlugFree](#destiny2insertsocketplugfree) - Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.

## destiny2GetClanAggregateStats

Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetClanAggregateStatsRequest;
import org.openapis.openapi.models.operations.Destiny2GetClanAggregateStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetClanAggregateStatsRequest req = new Destiny2GetClanAggregateStatsRequest(149448L) {{
                modes = "saepe";
            }};            

            Destiny2GetClanAggregateStatsResponse res = sdk.preview.destiny2GetClanAggregateStats(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetClanLeaderboards

Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetClanLeaderboardsRequest;
import org.openapis.openapi.models.operations.Destiny2GetClanLeaderboardsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetClanLeaderboardsRequest req = new Destiny2GetClanLeaderboardsRequest(868126L) {{
                maxtop = 37559;
                modes = "consequuntur";
                statid = "praesentium";
            }};            

            Destiny2GetClanLeaderboardsResponse res = sdk.preview.destiny2GetClanLeaderboards(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetLeaderboards

Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetLeaderboardsRequest;
import org.openapis.openapi.models.operations.Destiny2GetLeaderboardsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetLeaderboardsRequest req = new Destiny2GetLeaderboardsRequest(615560L, 166847) {{
                maxtop = 123820;
                modes = "quo";
                statid = "illum";
            }};            

            Destiny2GetLeaderboardsResponse res = sdk.preview.destiny2GetLeaderboards(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetLeaderboardsForCharacter

Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetLeaderboardsForCharacterRequest;
import org.openapis.openapi.models.operations.Destiny2GetLeaderboardsForCharacterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetLeaderboardsForCharacterRequest req = new Destiny2GetLeaderboardsForCharacterRequest(864934L, 807319L, 411397) {{
                maxtop = 569101;
                modes = "odit";
                statid = "ea";
            }};            

            Destiny2GetLeaderboardsForCharacterResponse res = sdk.preview.destiny2GetLeaderboardsForCharacter(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2GetPublicVendors

Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2GetPublicVendorsRequest;
import org.openapis.openapi.models.operations.Destiny2GetPublicVendorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2GetPublicVendorsRequest req = new Destiny2GetPublicVendorsRequest() {{
                components = new Integer[]{{
                    add(69167),
                }};
            }};            

            Destiny2GetPublicVendorsResponse res = sdk.preview.destiny2GetPublicVendors(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destiny2InsertSocketPlug

Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2InsertSocketPlugResponse;
import org.openapis.openapi.models.operations.Destiny2InsertSocketPlugSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2InsertSocketPlugResponse res = sdk.preview.destiny2InsertSocketPlug(new Destiny2InsertSocketPlugSecurity("maiores") {{
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

## destiny2InsertSocketPlugFree

Insert a 'free' plug into an item's socket. This does not require 'Advanced Write Action' authorization and is available to 3rd-party apps, but will only work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders, Ornaments, etc.). You must have a valid Destiny Account, and the character must either be in a social space, in orbit, or offline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Destiny2InsertSocketPlugFreeResponse;
import org.openapis.openapi.models.operations.Destiny2InsertSocketPlugFreeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Destiny2InsertSocketPlugFreeResponse res = sdk.preview.destiny2InsertSocketPlugFree(new Destiny2InsertSocketPlugFreeSecurity("quidem") {{
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
