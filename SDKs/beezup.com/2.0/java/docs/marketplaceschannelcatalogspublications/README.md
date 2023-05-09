# marketplacesChannelCatalogsPublications

### Available Operations

* [getPublications](#getpublications) - Fetch the publication history for an account, sorted by descending start date
* [publishCatalogToMarketplace](#publishcatalogtomarketplace) - [PREVIEW] Launch a publication of the catalog to the marketplace

## getPublications

Fetch the publication history for an account, sorted by descending start date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicationsPublicationTypesEnum;
import org.openapis.openapi.models.operations.GetPublicationsRequest;
import org.openapis.openapi.models.operations.GetPublicationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicationsRequest req = new GetPublicationsRequest(306986, "sapiente",                 new org.openapis.openapi.models.operations.GetPublicationsPublicationTypesEnum[]{{
                                add(GetPublicationsPublicationTypesEnum.UNPUBLISH),
                            }}) {{
                channelCatalogId = "reprehenderit";
                count = 356707;
            }};            

            GetPublicationsResponse res = sdk.marketplacesChannelCatalogsPublications.getPublications(req);

            if (res.accountPublications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishCatalogToMarketplace

[PREVIEW] Launch a publication of the catalog to the marketplace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishCatalogToMarketplaceRequest;
import org.openapis.openapi.models.operations.PublishCatalogToMarketplaceResponse;
import org.openapis.openapi.models.shared.FeedTypeEnum;
import org.openapis.openapi.models.shared.PublicationStrategyKindEnum;
import org.openapis.openapi.models.shared.PublishCatalogToMarketplaceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishCatalogToMarketplaceRequest req = new PublishCatalogToMarketplaceRequest(391774, "aut",                 new PublishCatalogToMarketplaceRequest(FeedTypeEnum.OFFERS, PublicationStrategyKindEnum.FULL, false););            

            PublishCatalogToMarketplaceResponse res = sdk.marketplacesChannelCatalogsPublications.publishCatalogToMarketplace(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
