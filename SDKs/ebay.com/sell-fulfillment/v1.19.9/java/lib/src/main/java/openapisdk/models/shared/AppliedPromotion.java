package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppliedPromotion
 * This type contains information about a sales promotion that is applied to a line item.
**/
public class AppliedPromotion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AppliedPromotion withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountAmount")
    public Amount discountAmount;
    public AppliedPromotion withDiscountAmount(Amount discountAmount) {
        this.discountAmount = discountAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionId")
    public String promotionId;
    public AppliedPromotion withPromotionId(String promotionId) {
        this.promotionId = promotionId;
        return this;
    }
}