package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItemProperties
 * This type contains information about the eBay programs under which a line item was listed and sold.
**/
public class LineItemProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerProtection")
    public Boolean buyerProtection;
    public LineItemProperties withBuyerProtection(Boolean buyerProtection) {
        this.buyerProtection = buyerProtection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromBestOffer")
    public Boolean fromBestOffer;
    public LineItemProperties withFromBestOffer(Boolean fromBestOffer) {
        this.fromBestOffer = fromBestOffer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soldViaAdCampaign")
    public Boolean soldViaAdCampaign;
    public LineItemProperties withSoldViaAdCampaign(Boolean soldViaAdCampaign) {
        this.soldViaAdCampaign = soldViaAdCampaign;
        return this;
    }
}