package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemPromotionResponse
 * This complex type defines the fields returned for an item (threshold) promotion.
**/
public class ItemPromotionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyDiscountToSingleItemOnly")
    public Boolean applyDiscountToSingleItemOnly;
    public ItemPromotionResponse withApplyDiscountToSingleItemOnly(Boolean applyDiscountToSingleItemOnly) {
        this.applyDiscountToSingleItemOnly = applyDiscountToSingleItemOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budget")
    public Amount budget;
    public ItemPromotionResponse withBudget(Amount budget) {
        this.budget = budget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponConfiguration")
    public CouponConfiguration couponConfiguration;
    public ItemPromotionResponse withCouponConfiguration(CouponConfiguration couponConfiguration) {
        this.couponConfiguration = couponConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ItemPromotionResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountRules")
    public DiscountRule[] discountRules;
    public ItemPromotionResponse withDiscountRules(DiscountRule[] discountRules) {
        this.discountRules = discountRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public ItemPromotionResponse withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryCriterion")
    public InventoryCriterion inventoryCriterion;
    public ItemPromotionResponse withInventoryCriterion(InventoryCriterion inventoryCriterion) {
        this.inventoryCriterion = inventoryCriterion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public ItemPromotionResponse withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ItemPromotionResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public ItemPromotionResponse withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionId")
    public String promotionId;
    public ItemPromotionResponse withPromotionId(String promotionId) {
        this.promotionId = promotionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionImageUrl")
    public String promotionImageUrl;
    public ItemPromotionResponse withPromotionImageUrl(String promotionImageUrl) {
        this.promotionImageUrl = promotionImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionStatus")
    public String promotionStatus;
    public ItemPromotionResponse withPromotionStatus(String promotionStatus) {
        this.promotionStatus = promotionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionType")
    public String promotionType;
    public ItemPromotionResponse withPromotionType(String promotionType) {
        this.promotionType = promotionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public ItemPromotionResponse withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}