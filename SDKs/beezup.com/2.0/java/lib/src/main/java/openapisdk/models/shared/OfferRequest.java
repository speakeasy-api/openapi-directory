package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OfferRequest {
    @JsonProperty("billingPeriodInMonth")
    public Integer billingPeriodInMonth;
    public OfferRequest withBillingPeriodInMonth(Integer billingPeriodInMonth) {
        this.billingPeriodInMonth = billingPeriodInMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponDiscountCode")
    public String couponDiscountCode;
    public OfferRequest withCouponDiscountCode(String couponDiscountCode) {
        this.couponDiscountCode = couponDiscountCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponOfferCode")
    public String couponOfferCode;
    public OfferRequest withCouponOfferCode(String couponOfferCode) {
        this.couponOfferCode = couponOfferCode;
        return this;
    }
    @JsonProperty("offerId")
    public Integer offerId;
    public OfferRequest withOfferId(Integer offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonProperty("storeCount")
    public Integer storeCount;
    public OfferRequest withStoreCount(Integer storeCount) {
        this.storeCount = storeCount;
        return this;
    }
}