package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemPromotion
 * This type defines the fields that describe a threshold promotion and includes the promotional discount, the items included in the promotion, and the rules that specify when the promotion is applied.
**/
public class ItemPromotion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyDiscountToSingleItemOnly")
    public Boolean applyDiscountToSingleItemOnly;
    public ItemPromotion withApplyDiscountToSingleItemOnly(Boolean applyDiscountToSingleItemOnly) {
        this.applyDiscountToSingleItemOnly = applyDiscountToSingleItemOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budget")
    public Amount budget;
    public ItemPromotion withBudget(Amount budget) {
        this.budget = budget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponConfiguration")
    public CouponConfiguration couponConfiguration;
    public ItemPromotion withCouponConfiguration(CouponConfiguration couponConfiguration) {
        this.couponConfiguration = couponConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ItemPromotion withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountRules")
    public DiscountRule[] discountRules;
    public ItemPromotion withDiscountRules(DiscountRule[] discountRules) {
        this.discountRules = discountRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public ItemPromotion withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryCriterion")
    public InventoryCriterion inventoryCriterion;
    public ItemPromotion withInventoryCriterion(InventoryCriterion inventoryCriterion) {
        this.inventoryCriterion = inventoryCriterion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public ItemPromotion withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ItemPromotion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public ItemPromotion withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionImageUrl")
    public String promotionImageUrl;
    public ItemPromotion withPromotionImageUrl(String promotionImageUrl) {
        this.promotionImageUrl = promotionImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionStatus")
    public String promotionStatus;
    public ItemPromotion withPromotionStatus(String promotionStatus) {
        this.promotionStatus = promotionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionType")
    public String promotionType;
    public ItemPromotion withPromotionType(String promotionType) {
        this.promotionType = promotionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public ItemPromotion withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}