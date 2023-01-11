package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Coupon
 * The details for the coupon available for the item.
**/
public class Coupon {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redemptionCode")
    public String redemptionCode;
    public Coupon withRedemptionCode(String redemptionCode) {
        this.redemptionCode = redemptionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public Terms terms;
    public Coupon withTerms(Terms terms) {
        this.terms = terms;
        return this;
    }
}