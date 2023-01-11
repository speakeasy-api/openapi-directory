package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MarketplaceChannelCatalogLovLinks
 * Indicates the List Of Values related to the marketplace
**/
public class MarketplaceChannelCatalogLovLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelationReasonCodeLOV")
    public BeezUpCommonLovLink3 cancelationReasonCodeLOV;
    public MarketplaceChannelCatalogLovLinks withCancelationReasonCodeLov(BeezUpCommonLovLink3 cancelationReasonCodeLOV) {
        this.cancelationReasonCodeLOV = cancelationReasonCodeLOV;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrierCodeLOV")
    public BeezUpCommonLovLink3 carrierCodeLOV;
    public MarketplaceChannelCatalogLovLinks withCarrierCodeLov(BeezUpCommonLovLink3 carrierCodeLOV) {
        this.carrierCodeLOV = carrierCodeLOV;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceStorePropertyGroupLOV")
    public BeezUpCommonLovLink3 marketplaceStorePropertyGroupLOV;
    public MarketplaceChannelCatalogLovLinks withMarketplaceStorePropertyGroupLov(BeezUpCommonLovLink3 marketplaceStorePropertyGroupLOV) {
        this.marketplaceStorePropertyGroupLOV = marketplaceStorePropertyGroupLOV;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceStorePropertyLOV")
    public BeezUpCommonLovLink3 marketplaceStorePropertyLOV;
    public MarketplaceChannelCatalogLovLinks withMarketplaceStorePropertyLov(BeezUpCommonLovLink3 marketplaceStorePropertyLOV) {
        this.marketplaceStorePropertyLOV = marketplaceStorePropertyLOV;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundReasonCodeLOV")
    public BeezUpCommonLovLink3 refundReasonCodeLOV;
    public MarketplaceChannelCatalogLovLinks withRefundReasonCodeLov(BeezUpCommonLovLink3 refundReasonCodeLOV) {
        this.refundReasonCodeLOV = refundReasonCodeLOV;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingMethodLOV")
    public BeezUpCommonLovLink3 shippingMethodLOV;
    public MarketplaceChannelCatalogLovLinks withShippingMethodLov(BeezUpCommonLovLink3 shippingMethodLOV) {
        this.shippingMethodLOV = shippingMethodLOV;
        return this;
    }
}