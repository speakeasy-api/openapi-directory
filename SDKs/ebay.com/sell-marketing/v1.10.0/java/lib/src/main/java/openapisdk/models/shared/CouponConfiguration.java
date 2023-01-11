package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CouponConfiguration
 * This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON.
**/
public class CouponConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponCode")
    public String couponCode;
    public CouponConfiguration withCouponCode(String couponCode) {
        this.couponCode = couponCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponType")
    public String couponType;
    public CouponConfiguration withCouponType(String couponType) {
        this.couponType = couponType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxCouponRedemptionPerUser")
    public Integer maxCouponRedemptionPerUser;
    public CouponConfiguration withMaxCouponRedemptionPerUser(Integer maxCouponRedemptionPerUser) {
        this.maxCouponRedemptionPerUser = maxCouponRedemptionPerUser;
        return this;
    }
}