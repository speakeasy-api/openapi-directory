package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abbreviation")
    public String abbreviation;
    public ItemInput withAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
        return this;
    }
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
    public Object[] categories;
    public ItemInput withCategories(Object[] categories) {
        this.categories = categories;
        return this;
    }
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idempotency_key")
    public String idempotencyKey;
    public ItemInput withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifier_groups")
    public Object[] modifierGroups;
    public ItemInput withModifierGroups(Object[] modifierGroups) {
        this.modifierGroups = modifierGroups;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ItemInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public Object[] options;
    public ItemInput withOptions(Object[] options) {
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public ItemInput withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_ids")
    public String[] taxIds;
    public ItemInput withTaxIds(String[] taxIds) {
        this.taxIds = taxIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variations")
    public Object[] variations;
    public ItemInput withVariations(Object[] variations) {
        this.variations = variations;
        return this;
    }
}