package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PurchaseOfferingRequest
 * Represents a request for a purchase offering.
**/
public class PurchaseOfferingRequest {
    @JsonProperty("offeringId")
    public String offeringId;
    public PurchaseOfferingRequest withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringPromotionId")
    public String offeringPromotionId;
    public PurchaseOfferingRequest withOfferingPromotionId(String offeringPromotionId) {
        this.offeringPromotionId = offeringPromotionId;
        return this;
    }
    @JsonProperty("quantity")
    public Long quantity;
    public PurchaseOfferingRequest withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}