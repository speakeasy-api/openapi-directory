package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContractDiscountInfo
 * Describe the discount information related to the offer.
**/
public class ContractDiscountInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountCodePromoDiscount")
    public Double amountCodePromoDiscount;
    public ContractDiscountInfo withAmountCodePromoDiscount(Double amountCodePromoDiscount) {
        this.amountCodePromoDiscount = amountCodePromoDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountCodePromoDiscountPerMonth")
    public Double amountCodePromoDiscountPerMonth;
    public ContractDiscountInfo withAmountCodePromoDiscountPerMonth(Double amountCodePromoDiscountPerMonth) {
        this.amountCodePromoDiscountPerMonth = amountCodePromoDiscountPerMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponDiscountCode")
    public String couponDiscountCode;
    public ContractDiscountInfo withCouponDiscountCode(String couponDiscountCode) {
        this.couponDiscountCode = couponDiscountCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponDiscountId")
    public Integer couponDiscountId;
    public ContractDiscountInfo withCouponDiscountId(Integer couponDiscountId) {
        this.couponDiscountId = couponDiscountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerHasActualDiscount")
    public Boolean customerHasActualDiscount;
    public ContractDiscountInfo withCustomerHasActualDiscount(Boolean customerHasActualDiscount) {
        this.customerHasActualDiscount = customerHasActualDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountDurationInMonth")
    public Integer discountDurationInMonth;
    public ContractDiscountInfo withDiscountDurationInMonth(Integer discountDurationInMonth) {
        this.discountDurationInMonth = discountDurationInMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCouponDiscountLinkedToCouponOffer")
    public Boolean isCouponDiscountLinkedToCouponOffer;
    public ContractDiscountInfo withIsCouponDiscountLinkedToCouponOffer(Boolean isCouponDiscountLinkedToCouponOffer) {
        this.isCouponDiscountLinkedToCouponOffer = isCouponDiscountLinkedToCouponOffer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentDiscount")
    public Double percentDiscount;
    public ContractDiscountInfo withPercentDiscount(Double percentDiscount) {
        this.percentDiscount = percentDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionalCodeValidity")
    public PromotionalCodeValidityEnum promotionalCodeValidity;
    public ContractDiscountInfo withPromotionalCodeValidity(PromotionalCodeValidityEnum promotionalCodeValidity) {
        this.promotionalCodeValidity = promotionalCodeValidity;
        return this;
    }
}