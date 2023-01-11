package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PickupStep
 * This type is used to indicate the merchant's store where the buyer will pickup their In-Store Pickup order. The pickupStep container is only returned for In-Store Pickup orders. The In-Store Pickup feature is supported in the US, Canada, UK, Germany, and Australia marketplaces.
**/
public class PickupStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantLocationKey")
    public String merchantLocationKey;
    public PickupStep withMerchantLocationKey(String merchantLocationKey) {
        this.merchantLocationKey = merchantLocationKey;
        return this;
    }
}