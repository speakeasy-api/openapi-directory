# app

### Available Operations

* [getAppConfig](#getappconfig) - Get the global configuration for an application. Should be called during app statup.

This includes things like device and playback rules, classifications,
sitemap and subscriptions.

You have the option to select specific configuration objects using the 'include'
parameter, or if unspecified, getting all configuration.

* [getItvPage](#getitvpage) - Returns a page with the specified id.

This is a cut down version for low memory devices.123

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/itv/page?path=/search%3Fq%3Dthe`.

* [getPage](#getpage) - Returns a page with the specified id.

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/page?path=/search%3Fq%3Dthe`.


## getAppConfig

Get the global configuration for an application. Should be called during app statup.

This includes things like device and playback rules, classifications,
sitemap and subscriptions.

You have the option to select specific configuration objects using the 'include'
parameter, or if unspecified, getting all configuration.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppConfigIncludeEnum;
import org.openapis.openapi.models.operations.GetAppConfigRequest;
import org.openapis.openapi.models.operations.GetAppConfigResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAppConfigRequest req = new GetAppConfigRequest() {{
                device = "perferendis";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LDP),
                    add(FeatureFlagsEnum.CAS),
                }};
                include = new org.openapis.openapi.models.operations.GetAppConfigIncludeEnum[]{{
                    add(GetAppConfigIncludeEnum.SITEMAP),
                    add(GetAppConfigIncludeEnum.SITEMAP),
                    add(GetAppConfigIncludeEnum.NAVIGATION),
                }};
                lang = "natus";
                segments = new String[]{{
                    add("eum"),
                    add("vero"),
                    add("aspernatur"),
                }};
                sub = "architecto";
                system = "magnam";
            }};            

            GetAppConfigResponse res = sdk.app.getAppConfig(req);

            if (res.appConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItvPage

Returns a page with the specified id.

This is a cut down version for low memory devices.123

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/itv/page?path=/search%3Fq%3Dthe`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItvPageItemDetailExpandEnum;
import org.openapis.openapi.models.operations.GetItvPageItemDetailSelectSeasonEnum;
import org.openapis.openapi.models.operations.GetItvPageRequest;
import org.openapis.openapi.models.operations.GetItvPageResponse;
import org.openapis.openapi.models.operations.GetItvPageTextEntryFormatEnum;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItvPageRequest req = new GetItvPageRequest("et") {{
                device = "excepturi";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.RPT),
                }};
                itemDetailExpand = GetItvPageItemDetailExpandEnum.CHILDREN;
                itemDetailSelectSeason = GetItvPageItemDetailSelectSeasonEnum.FIRST;
                lang = "mollitia";
                listPageSize = 968962;
                listPageSizeLarge = 652103;
                maxListPrefetch = 320997;
                maxRating = "eum";
                segments = new String[]{{
                    add("necessitatibus"),
                }};
                sub = "odit";
                textEntryFormat = GetItvPageTextEntryFormatEnum.MARKDOWN;
            }};            

            GetItvPageResponse res = sdk.app.getItvPage(req);

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPage

Returns a page with the specified id.

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/page?path=/search%3Fq%3Dthe`.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPageItemDetailExpandEnum;
import org.openapis.openapi.models.operations.GetPageItemDetailSelectSeasonEnum;
import org.openapis.openapi.models.operations.GetPageRequest;
import org.openapis.openapi.models.operations.GetPageResponse;
import org.openapis.openapi.models.operations.GetPageTextEntryFormatEnum;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPageRequest req = new GetPageRequest("quasi") {{
                device = "iure";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.LDP),
                    add(FeatureFlagsEnum.LRL),
                    add(FeatureFlagsEnum.RPT),
                }};
                itemDetailExpand = GetPageItemDetailExpandEnum.ANCESTORS;
                itemDetailSelectSeason = GetPageItemDetailSelectSeasonEnum.FIRST;
                lang = "architecto";
                listPageSize = 99569;
                listPageSizeLarge = 919483;
                maxListPrefetch = 352312;
                maxRating = "expedita";
                segments = new String[]{{
                    add("repellat"),
                    add("quibusdam"),
                }};
                sub = "sed";
                textEntryFormat = GetPageTextEntryFormatEnum.HTML;
            }};            

            GetPageResponse res = sdk.app.getPage(req);

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
