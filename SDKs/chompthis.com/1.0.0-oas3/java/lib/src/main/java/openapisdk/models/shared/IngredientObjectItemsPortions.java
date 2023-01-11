package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IngredientObjectItemsPortions
 * An object containing information on a specific food portion found in this item
**/
public class IngredientObjectItemsPortions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_points")
    public Long dataPoints;
    public IngredientObjectItemsPortions withDataPoints(Long dataPoints) {
        this.dataPoints = dataPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public IngredientObjectItemsPortions withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("footnote")
    public String footnote;
    public IngredientObjectItemsPortions withFootnote(String footnote) {
        this.footnote = footnote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gram_weight")
    public Double gramWeight;
    public IngredientObjectItemsPortions withGramWeight(Double gramWeight) {
        this.gramWeight = gramWeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurement_unit")
    public String measurementUnit;
    public IngredientObjectItemsPortions withMeasurementUnit(String measurementUnit) {
        this.measurementUnit = measurementUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifier")
    public String modifier;
    public IngredientObjectItemsPortions withModifier(String modifier) {
        this.modifier = modifier;
        return this;
    }
}