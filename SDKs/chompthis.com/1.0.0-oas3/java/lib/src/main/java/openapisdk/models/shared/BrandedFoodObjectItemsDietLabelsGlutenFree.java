package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandedFoodObjectItemsDietLabelsGlutenFree
 * An object containing information on this item's compatibility with Gluten Free diets
**/
public class BrandedFoodObjectItemsDietLabelsGlutenFree {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibility_level")
    public Long compatibilityLevel;
    public BrandedFoodObjectItemsDietLabelsGlutenFree withCompatibilityLevel(Long compatibilityLevel) {
        this.compatibilityLevel = compatibilityLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Long confidence;
    public BrandedFoodObjectItemsDietLabelsGlutenFree withConfidence(Long confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence_description")
    public String confidenceDescription;
    public BrandedFoodObjectItemsDietLabelsGlutenFree withConfidenceDescription(String confidenceDescription) {
        this.confidenceDescription = confidenceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_compatible")
    public Boolean isCompatible;
    public BrandedFoodObjectItemsDietLabelsGlutenFree withIsCompatible(Boolean isCompatible) {
        this.isCompatible = isCompatible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BrandedFoodObjectItemsDietLabelsGlutenFree withName(String name) {
        this.name = name;
        return this;
    }
}