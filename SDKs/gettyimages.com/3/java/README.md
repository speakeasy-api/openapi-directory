# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetV3AffiliatesSearchImagesRequest req = new GetV3AffiliatesSearchImagesRequest() {{
                queryParams = new GetV3AffiliatesSearchImagesQueryParams() {{
                    phrase = "ut";
                    style = "vector";
                }};
                headers = new GetV3AffiliatesSearchImagesHeaders() {{
                    acceptLanguage = "quam";
                }};
            }};

            GetV3AffiliatesSearchImagesResponse res = sdk.affiliateSearch.getV3AffiliatesSearchImages(req);

            if (res.affiliateImageSearchResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### AffiliateSearch

* `getV3AffiliatesSearchImages`
* `getV3AffiliatesSearchVideos`

### Artists

* `getV3ArtistsImages` - Search for images by a photographer
* `getV3ArtistsVideos` - Search for videos by a photographer

### AssetChanges

* `deleteV3AssetChangesChangeSetsChangeSetId` - Confirm asset change notifications.
* `getV3AssetChangesChannels` - Get a list of asset change notification channels.
* `putV3AssetChangesChangeSets` - Get asset change notifications.

### AssetLicensing

* `postV3AssetLicensingAssetId` - Endpoint for acquiring extended licenses with iStock credits for an asset.

### Boards

* `deleteV3BoardsBoardId` - Delete a board
* `deleteV3BoardsBoardIdAssets` - Remove assets from a board
* `deleteV3BoardsBoardIdAssetsAssetId` - Remove an asset from a board
* `deleteV3BoardsBoardIdCommentsCommentId` - Delete a comment from a board
* `getV3Boards` - Get all boards that the user participates in
* `getV3BoardsBoardId` - Get assets and metadata for a specific board
* `getV3BoardsBoardIdComments` - Get comments from a board
* `postV3Boards` - Create a new board
* `postV3BoardsBoardIdComments` - Add a comment to a board
* `putV3BoardsBoardId` - Update a board
* `putV3BoardsBoardIdAssets` - Add assets to a board
* `putV3BoardsBoardIdAssetsAssetId` - Add an asset to a board

### Collections

* `getV3Collections` - Gets collections applicable for the customer.

### Countries

* `getV3Countries` - Gets countries codes and names.

### Customers

* `getV3CustomersCurrent` - Returns information about the current user.

### Downloads

* `getV3Downloads` - Returns information about a customer's downloaded assets.
* `postV3DownloadsImagesId` - Download an image
* `postV3DownloadsVideosId` - Download a video

### Events

* `getV3Events` - Get metadata for multiple events
* `getV3EventsId` - Get metadata for a single event

### Images

* `getV3Images` - Get metadata for multiple images by supplying multiple image ids
* `getV3ImagesId` - Get metadata for a single image by supplying one image id
* `getV3ImagesIdDownloadhistory` - Returns information about a customer's download history for a specific asset
* `getV3ImagesIdSameSeries` - Retrieve creative images from the same series
* `getV3ImagesIdSimilar` - Retrieve similar images

### Orders

* `getV3OrdersId` - Get order metadata

### Products

* `getV3Products` - Get Products

### Purchases

* `getV3PurchasedAssets` - Get Previously Purchased Images and Video

### Search

* `getV3SearchEvents` - Search for events
* `getV3SearchImages` - Search for both creative and editorial images
* `getV3SearchImagesCreative` - Search for creative images only
* `getV3SearchImagesCreativeByImage` - Search for creative images based on url
* `getV3SearchImagesEditorial` - Search for editorial images only
* `getV3SearchVideosCreative` - Search for creative videos
* `getV3SearchVideosCreativeByImage` - Search for creative videos based on url
* `getV3SearchVideosEditorial` - Search for editorial videos

### Usage

* `putV3UsageBatchesId` - Report usage of assets via a batch format.

### Videos

* `getV3Videos` - Get metadata for multiple videos by supplying multiple video ids
* `getV3VideosId` - Get metadata for a single video by supplying one video id
* `getV3VideosIdDownloadhistory` - Returns information about a customer's download history for a specific asset
* `getV3VideosIdSameSeries` - Retrieve creative videos from the same series
* `getV3VideosIdSimilar` - Retrieve similar videos

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
