package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandedFoodObjectItemsNutrients
 * An object containing information for a specific nutrient found in this food item
**/
public class BrandedFoodObjectItemsNutrients {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_points")
    public Long dataPoints;
    public BrandedFoodObjectItemsNutrients withDataPoints(Long dataPoints) {
        this.dataPoints = dataPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BrandedFoodObjectItemsNutrients withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurement_unit")
    public String measurementUnit;
    public BrandedFoodObjectItemsNutrients withMeasurementUnit(String measurementUnit) {
        this.measurementUnit = measurementUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BrandedFoodObjectItemsNutrients withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_100g")
    public Double per100g;
    public BrandedFoodObjectItemsNutrients withPer100g(Double per100g) {
        this.per100g = per100g;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public BrandedFoodObjectItemsNutrients withRank(Long rank) {
        this.rank = rank;
        return this;
    }
}