package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventItem
 * The detailed data returned for the event item.
**/
public class EventItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalImages")
    public Image[] additionalImages;
    public EventItem withAdditionalImages(Image[] additionalImages) {
        this.additionalImages = additionalImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryAncestorIds")
    public String[] categoryAncestorIds;
    public EventItem withCategoryAncestorIds(String[] categoryAncestorIds) {
        this.categoryAncestorIds = categoryAncestorIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public String categoryId;
    public EventItem withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficiencyClass")
    public String energyEfficiencyClass;
    public EventItem withEnergyEfficiencyClass(String energyEfficiencyClass) {
        this.energyEfficiencyClass = energyEfficiencyClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventId")
    public String eventId;
    public EventItem withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public EventItem withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemAffiliateWebUrl")
    public String itemAffiliateWebUrl;
    public EventItem withItemAffiliateWebUrl(String itemAffiliateWebUrl) {
        this.itemAffiliateWebUrl = itemAffiliateWebUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemGroupId")
    public String itemGroupId;
    public EventItem withItemGroupId(String itemGroupId) {
        this.itemGroupId = itemGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemGroupType")
    public String itemGroupType;
    public EventItem withItemGroupType(String itemGroupType) {
        this.itemGroupType = itemGroupType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public EventItem withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemWebUrl")
    public String itemWebUrl;
    public EventItem withItemWebUrl(String itemWebUrl) {
        this.itemWebUrl = itemWebUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyItemId")
    public String legacyItemId;
    public EventItem withLegacyItemId(String legacyItemId) {
        this.legacyItemId = legacyItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketingPrice")
    public MarketingPrice marketingPrice;
    public EventItem withMarketingPrice(MarketingPrice marketingPrice) {
        this.marketingPrice = marketingPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Amount price;
    public EventItem withPrice(Amount price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qualifiedPrograms")
    public String[] qualifiedPrograms;
    public EventItem withQualifiedPrograms(String[] qualifiedPrograms) {
        this.qualifiedPrograms = qualifiedPrograms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingOptions")
    public ShippingOption[] shippingOptions;
    public EventItem withShippingOptions(ShippingOption[] shippingOptions) {
        this.shippingOptions = shippingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EventItem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitPrice")
    public Amount unitPrice;
    public EventItem withUnitPrice(Amount unitPrice) {
        this.unitPrice = unitPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitPricingMeasure")
    public String unitPricingMeasure;
    public EventItem withUnitPricingMeasure(String unitPricingMeasure) {
        this.unitPricingMeasure = unitPricingMeasure;
        return this;
    }
}