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

import org.openapis.openapi.models.operations.GetNhArtQueryParams;
import org.openapis.openapi.models.operations.GetNhArtHeaders;
import org.openapis.openapi.models.operations.GetNhArtRequest;
import org.openapis.openapi.models.operations.GetNhArtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhArtRequest req = new GetNhArtRequest() {{
                queryParams = new GetNhArtQueryParams() {{
                    excludedetails = "corrupti";
                    hasfake = "provident";
                    thumbsize = 715190;
                }};
                headers = new GetNhArtHeaders() {{
                    acceptVersion = "quibusdam";
                    xApiKey = "9d8d69a6-74e0-4f46-bcc8-796ed151a05d";
                }};
            }};            

            GetNhArtResponse res = sdk.getNhArt(req);

            if (res.nhArtworks.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getNhArt` - All New Horizons artwork
* `getNhArtArtwork` - Single New Horizons artwork
* `getNhBugs` - All New Horizons bugs
* `getNhBugsBug` - Single New Horizons bug
* `getNhClothing` - All New Horizons clothing
* `getNhClothingClothing` - Single New Horizons clothing
* `getNhEvents` - All New Horizons events
* `getNhFish` - All New Horizons fish
* `getNhFishFish` - Single New Horizons fish
* `getNhFossilsAll` - All New Horizons fossil groups or individual fossil
* `getNhFossilsAllFossil` - Single New Horizons fossil group with individual fossils
* `getNhFossilsGroups` - All New Horizons fossil groups
* `getNhFossilsGroupsFossilGroup` - Single New Horizons fossil group
* `getNhFossilsIndividuals` - All New Horizons fossils
* `getNhFossilsIndividualsFossil` - Single New Horizons fossil
* `getNhFurniture` - All New Horizons furniture
* `getNhFurnitureFurniture` - Single New Horizons furniture
* `getNhInterior` - All New Horizons interior items
* `getNhInteriorItem` - Single New Horizons interior item
* `getNhItems` - Miscellaneous New Horizons items
* `getNhItemsItem` - Single New Horizons miscellaneous item
* `getNhPhotos` - All New Horizons photos and posters
* `getNhPhotosItem` - Single New Horizons photo or poster
* `getNhRecipes` - All New Horizons recipes
* `getNhRecipesItem` - Single New Horizons recipe
* `getNhSea` - All New Horizons sea creatures
* `getNhSeaSeaCreature` - Single New Horizons sea creature
* `getNhTools` - All New Horizons tools
* `getNhToolsTool` - Single New Horizons tool
* `getVillagers` - Villagers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
