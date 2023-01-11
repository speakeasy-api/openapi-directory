package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemDraft
 * The type that defines the fields for the listing details.
**/
public class ItemDraft {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public String categoryId;
    public ItemDraft withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charity")
    public Charity charity;
    public ItemDraft withCharity(Charity charity) {
        this.charity = charity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public ItemDraft withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public ItemDraft withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingSummary")
    public PricingSummary pricingSummary;
    public ItemDraft withPricingSummary(PricingSummary pricingSummary) {
        this.pricingSummary = pricingSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public Product product;
    public ItemDraft withProduct(Product product) {
        this.product = product;
        return this;
    }
}