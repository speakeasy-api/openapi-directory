package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandedFoodObjectItemsDietLabelsVegan
 * An object containing information on this item's compatibility with the Vegan diets
**/
public class BrandedFoodObjectItemsDietLabelsVegan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibility_level")
    public Long compatibilityLevel;
    public BrandedFoodObjectItemsDietLabelsVegan withCompatibilityLevel(Long compatibilityLevel) {
        this.compatibilityLevel = compatibilityLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Long confidence;
    public BrandedFoodObjectItemsDietLabelsVegan withConfidence(Long confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence_description")
    public String confidenceDescription;
    public BrandedFoodObjectItemsDietLabelsVegan withConfidenceDescription(String confidenceDescription) {
        this.confidenceDescription = confidenceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_compatible")
    public Boolean isCompatible;
    public BrandedFoodObjectItemsDietLabelsVegan withIsCompatible(Boolean isCompatible) {
        this.isCompatible = isCompatible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BrandedFoodObjectItemsDietLabelsVegan withName(String name) {
        this.name = name;
        return this;
    }
}