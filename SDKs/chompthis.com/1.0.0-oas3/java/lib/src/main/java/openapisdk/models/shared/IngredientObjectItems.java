package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IngredientObjectItems
 * An object containing information for this specific item.
**/
public class IngredientObjectItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calorie_conversion_factor")
    public IngredientObjectItemsCalorieConversionFactor calorieConversionFactor;
    public IngredientObjectItems withCalorieConversionFactor(IngredientObjectItemsCalorieConversionFactor calorieConversionFactor) {
        this.calorieConversionFactor = calorieConversionFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public String[] categories;
    public IngredientObjectItems withCategories(String[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("common_name")
    public String commonName;
    public IngredientObjectItems withCommonName(String commonName) {
        this.commonName = commonName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("components")
    public IngredientObjectItemsComponents[] components;
    public IngredientObjectItems withComponents(IngredientObjectItemsComponents[] components) {
        this.components = components;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("footnote")
    public String footnote;
    public IngredientObjectItems withFootnote(String footnote) {
        this.footnote = footnote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IngredientObjectItems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nutrients")
    public IngredientObjectItemsNutrients[] nutrients;
    public IngredientObjectItems withNutrients(IngredientObjectItemsNutrients[] nutrients) {
        this.nutrients = nutrients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portions")
    public IngredientObjectItemsPortions[] portions;
    public IngredientObjectItems withPortions(IngredientObjectItemsPortions[] portions) {
        this.portions = portions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protein_conversion_factor")
    public Double proteinConversionFactor;
    public IngredientObjectItems withProteinConversionFactor(Double proteinConversionFactor) {
        this.proteinConversionFactor = proteinConversionFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public String score;
    public IngredientObjectItems withScore(String score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_term")
    public String searchTerm;
    public IngredientObjectItems withSearchTerm(String searchTerm) {
        this.searchTerm = searchTerm;
        return this;
    }
}