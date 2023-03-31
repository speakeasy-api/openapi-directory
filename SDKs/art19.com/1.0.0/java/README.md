# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetClassificationsSecurity;
import org.openapis.openapi.models.operations.GetClassificationsSortEnum;
import org.openapis.openapi.models.operations.GetClassificationsTypeEnum;
import org.openapis.openapi.models.operations.GetClassificationsQueryParams;
import org.openapis.openapi.models.operations.GetClassificationsRequest;
import org.openapis.openapi.models.operations.GetClassificationsResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsRequest req = new GetClassificationsRequest() {{
                security = new GetClassificationsSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetClassificationsQueryParams() {{
                    ids = new String[]{{
                        add("9bd9d8d6-9a67-44e0-b467-cc8796ed151a"),
                        add("05dfc2dd-f7cc-478c-a1ba-928fc816742c"),
                        add("b7392059-2939-46fe-a759-6eb10faaa235"),
                    }};
                    isCountry = "explicabo";
                    pageNumber = 750686;
                    pageSize = 315428;
                    q = "omnis";
                    sort = new org.openapis.openapi.models.operations.GetClassificationsSortEnum[]{{
                        add("created_at"),
                        add("updated_at"),
                    }};
                    type = "AlternateFeedType";
                }};
            }};            

            GetClassificationsResponse res = sdk.classification.getClassifications(req);

            if (res.getClassifications200ApplicationVndApiPlusJsonObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### classification

* `getClassifications` - Get a list of classifications
* `getClassificationsId` - Get a specific classification

### classificationInclusion

* `getClassificationInclusions` - Get ClassificationInclusion records
* `getClassificationInclusionsId` - Get a specific classification inclusion

### credit

* `getCredits` - Get a list of credits
* `getCreditsId` - Get a specific credit

### episode

* `getEpisodes` - Get a list of episodes
* `getEpisodesId` - Get a specific episode
* `getEpisodesIdNextSibling` - Get the episode released right after the specified one
* `getEpisodesIdPreviousSibling` - Get the episode released right before the specified one

### image

* `getImages` - Get a list of images
* `getImagesId` - Get a specific image

### mediaAsset

* `getMediaAssets` - Get a list of media assets
* `getMediaAssetsId` - Get a specific media asset

### network

* `getNetworks` - Get a list of networks
* `getNetworksId` - Get a specific network

### person

* `getPeople` - Get a list of people
* `getPeopleId` - Get a specific person

### season

* `getSeasons` - Get a list of seasons
* `getSeasonsId` - Get a specific season

### series

* `getSeries` - Get a list of series
* `getSeriesId` - Get a specific series
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
