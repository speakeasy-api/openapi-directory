package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SelectionRule
 * This type specifies the selection rules used to create a campaign.
**/
public class SelectionRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brands")
    public String[] brands;
    public SelectionRule withBrands(String[] brands) {
        this.brands = brands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryIds")
    public String[] categoryIds;
    public SelectionRule withCategoryIds(String[] categoryIds) {
        this.categoryIds = categoryIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryScope")
    public String categoryScope;
    public SelectionRule withCategoryScope(String categoryScope) {
        this.categoryScope = categoryScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingConditionIds")
    public String[] listingConditionIds;
    public SelectionRule withListingConditionIds(String[] listingConditionIds) {
        this.listingConditionIds = listingConditionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPrice")
    public Amount maxPrice;
    public SelectionRule withMaxPrice(Amount maxPrice) {
        this.maxPrice = maxPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minPrice")
    public Amount minPrice;
    public SelectionRule withMinPrice(Amount minPrice) {
        this.minPrice = minPrice;
        return this;
    }
}