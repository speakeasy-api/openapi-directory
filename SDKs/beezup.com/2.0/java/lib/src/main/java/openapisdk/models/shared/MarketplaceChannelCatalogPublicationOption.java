package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MarketplaceChannelCatalogPublicationOption {
    @JsonProperty("feedType")
    public FeedTypeEnum feedType;
    public MarketplaceChannelCatalogPublicationOption withFeedType(FeedTypeEnum feedType) {
        this.feedType = feedType;
        return this;
    }
    @JsonProperty("kind")
    public PublicationStrategyKindEnum kind;
    public MarketplaceChannelCatalogPublicationOption withKind(PublicationStrategyKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonProperty("link")
    public LinksPublishCatalogToMarketplaceLink link;
    public MarketplaceChannelCatalogPublicationOption withLink(LinksPublishCatalogToMarketplaceLink link) {
        this.link = link;
        return this;
    }
    @JsonProperty("strategy")
    public String strategy;
    public MarketplaceChannelCatalogPublicationOption withStrategy(String strategy) {
        this.strategy = strategy;
        return this;
    }
    @JsonProperty("withUnpublish")
    public Boolean withUnpublish;
    public MarketplaceChannelCatalogPublicationOption withWithUnpublish(Boolean withUnpublish) {
        this.withUnpublish = withUnpublish;
        return this;
    }
}