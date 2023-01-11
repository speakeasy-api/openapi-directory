package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemPriceMarkdown
 * This type defines the fields used to describe an item price markdown promotion.
**/
public class ItemPriceMarkdown {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyFreeShipping")
    public Boolean applyFreeShipping;
    public ItemPriceMarkdown withApplyFreeShipping(Boolean applyFreeShipping) {
        this.applyFreeShipping = applyFreeShipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoSelectFutureInventory")
    public Boolean autoSelectFutureInventory;
    public ItemPriceMarkdown withAutoSelectFutureInventory(Boolean autoSelectFutureInventory) {
        this.autoSelectFutureInventory = autoSelectFutureInventory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockPriceIncreaseInItemRevision")
    public Boolean blockPriceIncreaseInItemRevision;
    public ItemPriceMarkdown withBlockPriceIncreaseInItemRevision(Boolean blockPriceIncreaseInItemRevision) {
        this.blockPriceIncreaseInItemRevision = blockPriceIncreaseInItemRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ItemPriceMarkdown withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public ItemPriceMarkdown withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketplaceId")
    public String marketplaceId;
    public ItemPriceMarkdown withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ItemPriceMarkdown withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public ItemPriceMarkdown withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionImageUrl")
    public String promotionImageUrl;
    public ItemPriceMarkdown withPromotionImageUrl(String promotionImageUrl) {
        this.promotionImageUrl = promotionImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionStatus")
    public String promotionStatus;
    public ItemPriceMarkdown withPromotionStatus(String promotionStatus) {
        this.promotionStatus = promotionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedInventoryDiscounts")
    public SelectedInventoryDiscount[] selectedInventoryDiscounts;
    public ItemPriceMarkdown withSelectedInventoryDiscounts(SelectedInventoryDiscount[] selectedInventoryDiscounts) {
        this.selectedInventoryDiscounts = selectedInventoryDiscounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public ItemPriceMarkdown withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}