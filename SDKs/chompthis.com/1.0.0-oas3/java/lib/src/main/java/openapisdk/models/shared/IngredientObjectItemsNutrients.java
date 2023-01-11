package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IngredientObjectItemsNutrients
 * An object containing information for a specific nutrient found in this food item
**/
public class IngredientObjectItemsNutrients {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_points")
    public Long dataPoints;
    public IngredientObjectItemsNutrients withDataPoints(Long dataPoints) {
        this.dataPoints = dataPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public IngredientObjectItemsNutrients withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("footnote")
    public String footnote;
    public IngredientObjectItemsNutrients withFootnote(String footnote) {
        this.footnote = footnote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max")
    public Double max;
    public IngredientObjectItemsNutrients withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurement_unit")
    public String measurementUnit;
    public IngredientObjectItemsNutrients withMeasurementUnit(String measurementUnit) {
        this.measurementUnit = measurementUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("median")
    public Double median;
    public IngredientObjectItemsNutrients withMedian(Double median) {
        this.median = median;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min")
    public Double min;
    public IngredientObjectItemsNutrients withMin(Double min) {
        this.min = min;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IngredientObjectItemsNutrients withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_100g")
    public Double per100g;
    public IngredientObjectItemsNutrients withPer100g(Double per100g) {
        this.per100g = per100g;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public IngredientObjectItemsNutrients withRank(Long rank) {
        this.rank = rank;
        return this;
    }
}