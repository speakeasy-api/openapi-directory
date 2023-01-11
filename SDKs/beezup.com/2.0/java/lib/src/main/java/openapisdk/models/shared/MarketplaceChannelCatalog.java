package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MarketplaceChannelCatalog
 * This object indicates you the association between a channel catalog and a marketplace. The account identifier will be automatically defined based on your marketplace merchant identfier.
**/
public class MarketplaceChannelCatalog {
    @JsonProperty("apiSettingsStatus")
    public BeezUpCommonApiSettingsStatusEnum apiSettingsStatus;
    public MarketplaceChannelCatalog withApiSettingsStatus(BeezUpCommonApiSettingsStatusEnum apiSettingsStatus) {
        this.apiSettingsStatus = apiSettingsStatus;
        return this;
    }
    @JsonProperty("beezUPChannelCatalogId")
    public String beezUPChannelCatalogId;
    public MarketplaceChannelCatalog withBeezUpChannelCatalogId(String beezUPChannelCatalogId) {
        this.beezUPChannelCatalogId = beezUPChannelCatalogId;
        return this;
    }
    @JsonProperty("beezUPChannelId")
    public String beezUPChannelId;
    public MarketplaceChannelCatalog withBeezUpChannelId(String beezUPChannelId) {
        this.beezUPChannelId = beezUPChannelId;
        return this;
    }
    @JsonProperty("beezUPMarketplaceName")
    public Object beezUPMarketplaceName;
    public MarketplaceChannelCatalog withBeezUpMarketplaceName(Object beezUPMarketplaceName) {
        this.beezUPMarketplaceName = beezUPMarketplaceName;
        return this;
    }
    @JsonProperty("beezUPStoreId")
    public String beezUPStoreId;
    public MarketplaceChannelCatalog withBeezUpStoreId(String beezUPStoreId) {
        this.beezUPStoreId = beezUPStoreId;
        return this;
    }
    @JsonProperty("beezUPStoreName")
    public String beezUPStoreName;
    public MarketplaceChannelCatalog withBeezUpStoreName(String beezUPStoreName) {
        this.beezUPStoreName = beezUPStoreName;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public MarketplaceChannelCatalog withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("links")
    public MarketplaceChannelCatalogLinks links;
    public MarketplaceChannelCatalog withLinks(MarketplaceChannelCatalogLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("lovLinks")
    public MarketplaceChannelCatalogLovLinks lovLinks;
    public MarketplaceChannelCatalog withLovLinks(MarketplaceChannelCatalogLovLinks lovLinks) {
        this.lovLinks = lovLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceAccountId")
    public Integer marketplaceAccountId;
    public MarketplaceChannelCatalog withMarketplaceAccountId(Integer marketplaceAccountId) {
        this.marketplaceAccountId = marketplaceAccountId;
        return this;
    }
    @JsonProperty("marketplaceBusinessCode")
    public String marketplaceBusinessCode;
    public MarketplaceChannelCatalog withMarketplaceBusinessCode(String marketplaceBusinessCode) {
        this.marketplaceBusinessCode = marketplaceBusinessCode;
        return this;
    }
    @JsonProperty("marketplaceIsoCountryCodeAlpha2")
    public String marketplaceIsoCountryCodeAlpha2;
    public MarketplaceChannelCatalog withMarketplaceIsoCountryCodeAlpha2(String marketplaceIsoCountryCodeAlpha2) {
        this.marketplaceIsoCountryCodeAlpha2 = marketplaceIsoCountryCodeAlpha2;
        return this;
    }
    @JsonProperty("marketplaceMarketPlaceId")
    public String marketplaceMarketPlaceId;
    public MarketplaceChannelCatalog withMarketplaceMarketPlaceId(String marketplaceMarketPlaceId) {
        this.marketplaceMarketPlaceId = marketplaceMarketPlaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceMerchantIdentifiers")
    public java.util.Map<String, String> marketplaceMerchantIdentifiers;
    public MarketplaceChannelCatalog withMarketplaceMerchantIdentifiers(java.util.Map<String, String> marketplaceMerchantIdentifiers) {
        this.marketplaceMerchantIdentifiers = marketplaceMerchantIdentifiers;
        return this;
    }
    @JsonProperty("marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public MarketplaceChannelCatalog withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
}