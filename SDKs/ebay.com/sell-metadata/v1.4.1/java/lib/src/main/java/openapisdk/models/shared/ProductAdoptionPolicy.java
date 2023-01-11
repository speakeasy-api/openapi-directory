package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductAdoptionPolicy
 * This complex type returns a category ID and a flag that indicates whether or not items listed in that category require the declaration of an ePID value, which links the item to the eBay Catalog. The type also lists any items that are excepted from the requirement to included an ePID value.
**/
public class ProductAdoptionPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public String categoryId;
    public ProductAdoptionPolicy withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTreeId")
    public String categoryTreeId;
    public ProductAdoptionPolicy withCategoryTreeId(String categoryTreeId) {
        this.categoryTreeId = categoryTreeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusion")
    public Exclusion exclusion;
    public ProductAdoptionPolicy withExclusion(Exclusion exclusion) {
        this.exclusion = exclusion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRequired")
    public Boolean productRequired;
    public ProductAdoptionPolicy withProductRequired(Boolean productRequired) {
        this.productRequired = productRequired;
        return this;
    }
}