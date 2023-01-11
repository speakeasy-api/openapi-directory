package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PromotionDetail
 * This type defines the fields that describe a promotion. This includes all the information about a promotion except for the listings that are a part of the promotion.
**/
public class PromotionDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponCode")
    public String couponCode;
    public PromotionDetail withCouponCode(String couponCode) {
        this.couponCode = couponCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PromotionDetail withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public PromotionDetail withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public PromotionDetail withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PromotionDetail withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public PromotionDetail withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionHref")
    public String promotionHref;
    public PromotionDetail withPromotionHref(String promotionHref) {
        this.promotionHref = promotionHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionId")
    public String promotionId;
    public PromotionDetail withPromotionId(String promotionId) {
        this.promotionId = promotionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionImageUrl")
    public String promotionImageUrl;
    public PromotionDetail withPromotionImageUrl(String promotionImageUrl) {
        this.promotionImageUrl = promotionImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionStatus")
    public String promotionStatus;
    public PromotionDetail withPromotionStatus(String promotionStatus) {
        this.promotionStatus = promotionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionType")
    public String promotionType;
    public PromotionDetail withPromotionType(String promotionType) {
        this.promotionType = promotionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public PromotionDetail withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}