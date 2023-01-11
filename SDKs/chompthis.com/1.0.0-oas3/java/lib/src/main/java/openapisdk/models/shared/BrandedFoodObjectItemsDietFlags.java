package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandedFoodObjectItemsDietFlags
 * An object containing information on an individual ingredient that was flagged as potentially not being compatible with a certain diet
**/
public class BrandedFoodObjectItemsDietFlags {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibility_description")
    public String compatibilityDescription;
    public BrandedFoodObjectItemsDietFlags withCompatibilityDescription(String compatibilityDescription) {
        this.compatibilityDescription = compatibilityDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibility_level")
    public Long compatibilityLevel;
    public BrandedFoodObjectItemsDietFlags withCompatibilityLevel(Long compatibilityLevel) {
        this.compatibilityLevel = compatibilityLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diet_label")
    public String dietLabel;
    public BrandedFoodObjectItemsDietFlags withDietLabel(String dietLabel) {
        this.dietLabel = dietLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingredient")
    public String ingredient;
    public BrandedFoodObjectItemsDietFlags withIngredient(String ingredient) {
        this.ingredient = ingredient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingredient_description")
    public String ingredientDescription;
    public BrandedFoodObjectItemsDietFlags withIngredientDescription(String ingredientDescription) {
        this.ingredientDescription = ingredientDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_allergen")
    public Boolean isAllergen;
    public BrandedFoodObjectItemsDietFlags withIsAllergen(Boolean isAllergen) {
        this.isAllergen = isAllergen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_compatible")
    public String isCompatible;
    public BrandedFoodObjectItemsDietFlags withIsCompatible(String isCompatible) {
        this.isCompatible = isCompatible;
        return this;
    }
}