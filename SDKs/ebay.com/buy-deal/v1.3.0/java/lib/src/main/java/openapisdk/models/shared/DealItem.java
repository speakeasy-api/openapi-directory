package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DealItem
 * The detailed data returned for the deal item.
**/
public class DealItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalImages")
    public Image[] additionalImages;
    public DealItem withAdditionalImages(Image[] additionalImages) {
        this.additionalImages = additionalImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryAncestorIds")
    public String[] categoryAncestorIds;
    public DealItem withCategoryAncestorIds(String[] categoryAncestorIds) {
        this.categoryAncestorIds = categoryAncestorIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public String categoryId;
    public DealItem withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commissionable")
    public Boolean commissionable;
    public DealItem withCommissionable(Boolean commissionable) {
        this.commissionable = commissionable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealAffiliateWebUrl")
    public String dealAffiliateWebUrl;
    public DealItem withDealAffiliateWebUrl(String dealAffiliateWebUrl) {
        this.dealAffiliateWebUrl = dealAffiliateWebUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealEndDate")
    public String dealEndDate;
    public DealItem withDealEndDate(String dealEndDate) {
        this.dealEndDate = dealEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealStartDate")
    public String dealStartDate;
    public DealItem withDealStartDate(String dealStartDate) {
        this.dealStartDate = dealStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealWebUrl")
    public String dealWebUrl;
    public DealItem withDealWebUrl(String dealWebUrl) {
        this.dealWebUrl = dealWebUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("energyEfficiencyClass")
    public String energyEfficiencyClass;
    public DealItem withEnergyEfficiencyClass(String energyEfficiencyClass) {
        this.energyEfficiencyClass = energyEfficiencyClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public DealItem withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemAffiliateWebUrl")
    public String itemAffiliateWebUrl;
    public DealItem withItemAffiliateWebUrl(String itemAffiliateWebUrl) {
        this.itemAffiliateWebUrl = itemAffiliateWebUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemGroupId")
    public String itemGroupId;
    public DealItem withItemGroupId(String itemGroupId) {
        this.itemGroupId = itemGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemGroupType")
    public String itemGroupType;
    public DealItem withItemGroupType(String itemGroupType) {
        this.itemGroupType = itemGroupType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public DealItem withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemWebUrl")
    public String itemWebUrl;
    public DealItem withItemWebUrl(String itemWebUrl) {
        this.itemWebUrl = itemWebUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyItemId")
    public String legacyItemId;
    public DealItem withLegacyItemId(String legacyItemId) {
        this.legacyItemId = legacyItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketingPrice")
    public MarketingPrice marketingPrice;
    public DealItem withMarketingPrice(MarketingPrice marketingPrice) {
        this.marketingPrice = marketingPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Amount price;
    public DealItem withPrice(Amount price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qualifiedPrograms")
    public String[] qualifiedPrograms;
    public DealItem withQualifiedPrograms(String[] qualifiedPrograms) {
        this.qualifiedPrograms = qualifiedPrograms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingOptions")
    public ShippingOption[] shippingOptions;
    public DealItem withShippingOptions(ShippingOption[] shippingOptions) {
        this.shippingOptions = shippingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public DealItem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitPrice")
    public Amount unitPrice;
    public DealItem withUnitPrice(Amount unitPrice) {
        this.unitPrice = unitPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitPricingMeasure")
    public String unitPricingMeasure;
    public DealItem withUnitPricingMeasure(String unitPricingMeasure) {
        this.unitPricingMeasure = unitPricingMeasure;
        return this;
    }
}