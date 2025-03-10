/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abbreviation")
    public String abbreviation;

    public ItemInput withAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
        return this;
    }
    
    /**
     * A list of locations where the object is not present, even if present_at_all_locations is true. This can include locations that are deactivated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("absent_at_location_ids")
    public String[] absentAtLocationIds;

    public ItemInput withAbsentAtLocationIds(String[] absentAtLocationIds) {
        this.absentAtLocationIds = absentAtLocationIds;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available")
    public Boolean available;

    public ItemInput withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_for_pickup")
    public Boolean availableForPickup;

    public ItemInput withAvailableForPickup(Boolean availableForPickup) {
        this.availableForPickup = availableForPickup;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_online")
    public Boolean availableOnline;

    public ItemInput withAvailableOnline(Boolean availableOnline) {
        this.availableOnline = availableOnline;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public ItemCategoriesInput[] categories;

    public ItemInput withCategories(ItemCategoriesInput[] categories) {
        this.categories = categories;
        return this;
    }
    
    /**
     * Product code, e.g. UPC or EAN
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;

    public ItemInput withCode(String code) {
        this.code = code;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public Double cost;

    public ItemInput withCost(Double cost) {
        this.cost = cost;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;

    public ItemInput withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public ItemInput withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden")
    public Boolean hidden;

    public ItemInput withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public ItemInput withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * A value you specify that uniquely identifies this request among requests you have sent.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idempotency_key")
    public String idempotencyKey;

    public ItemInput withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
    
    /**
     * True if this item should be counted as revenue. For example, gift cards and donations would not be counted as revenue.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_revenue")
    public Boolean isRevenue;

    public ItemInput withIsRevenue(Boolean isRevenue) {
        this.isRevenue = isRevenue;
        return this;
    }
    
    @JsonProperty("name")
    public String name;

    public ItemInput withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * List of options pertaining to this item's attribute variation
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public ItemOptions[] options;

    public ItemInput withOptions(ItemOptions[] options) {
        this.options = options;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("present_at_all_locations")
    public Boolean presentAtAllLocations;

    public ItemInput withPresentAtAllLocations(Boolean presentAtAllLocations) {
        this.presentAtAllLocations = presentAtAllLocations;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_amount")
    public Double priceAmount;

    public ItemInput withPriceAmount(Double priceAmount) {
        this.priceAmount = priceAmount;
        return this;
    }
    
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_currency")
    public CurrencyEnum priceCurrency;

    public ItemInput withPriceCurrency(CurrencyEnum priceCurrency) {
        this.priceCurrency = priceCurrency;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricing_type")
    public ItemPricingTypeEnum pricingType;

    public ItemInput withPricingType(ItemPricingTypeEnum pricingType) {
        this.pricingType = pricingType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_type")
    public ItemProductTypeEnum productType;

    public ItemInput withProductType(ItemProductTypeEnum productType) {
        this.productType = productType;
        return this;
    }
    
    /**
     * SKU of the item
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;

    public ItemInput withSku(String sku) {
        this.sku = sku;
        return this;
    }
    
    /**
     * A list of Tax IDs for the product.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_ids")
    public String[] taxIds;

    public ItemInput withTaxIds(String[] taxIds) {
        this.taxIds = taxIds;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_default_tax_rates")
    public Boolean useDefaultTaxRates;

    public ItemInput withUseDefaultTaxRates(Boolean useDefaultTaxRates) {
        this.useDefaultTaxRates = useDefaultTaxRates;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variations")
    public ItemVariationsInput[] variations;

    public ItemInput withVariations(ItemVariationsInput[] variations) {
        this.variations = variations;
        return this;
    }
    
    public ItemInput(@JsonProperty("name") String name) {
        this.name = name;
  }
}
