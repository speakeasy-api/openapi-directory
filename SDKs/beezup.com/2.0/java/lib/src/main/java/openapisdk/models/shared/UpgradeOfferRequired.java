package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpgradeOfferRequired
 * The message contains the offer identifier required to execute this operation
**/
public class UpgradeOfferRequired {
    @JsonProperty("offerId")
    public Integer offerId;
    public UpgradeOfferRequired withOfferId(Integer offerId) {
        this.offerId = offerId;
        return this;
    }
}