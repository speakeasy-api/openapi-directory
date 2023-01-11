package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PublishCatalogToMarketplaceRequest
 * Publish the catalog to the marketplace
**/
public class PublishCatalogToMarketplaceRequest {
    @JsonProperty("feedType")
    public FeedTypeEnum feedType;
    public PublishCatalogToMarketplaceRequest withFeedType(FeedTypeEnum feedType) {
        this.feedType = feedType;
        return this;
    }
    @JsonProperty("publicationStrategyKind")
    public PublicationStrategyKindEnum publicationStrategyKind;
    public PublishCatalogToMarketplaceRequest withPublicationStrategyKind(PublicationStrategyKindEnum publicationStrategyKind) {
        this.publicationStrategyKind = publicationStrategyKind;
        return this;
    }
    @JsonProperty("withUnpublish")
    public Boolean withUnpublish;
    public PublishCatalogToMarketplaceRequest withWithUnpublish(Boolean withUnpublish) {
        this.withUnpublish = withUnpublish;
        return this;
    }
}