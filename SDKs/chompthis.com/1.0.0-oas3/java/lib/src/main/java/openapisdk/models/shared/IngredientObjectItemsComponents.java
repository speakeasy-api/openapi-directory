package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IngredientObjectItemsComponents
 * An object containing information on a specific component of this food item
**/
public class IngredientObjectItemsComponents {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_points")
    public Long dataPoints;
    public IngredientObjectItemsComponents withDataPoints(Long dataPoints) {
        this.dataPoints = dataPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gram_weight")
    public Double gramWeight;
    public IngredientObjectItemsComponents withGramWeight(Double gramWeight) {
        this.gramWeight = gramWeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_refuse")
    public Boolean isRefuse;
    public IngredientObjectItemsComponents withIsRefuse(Boolean isRefuse) {
        this.isRefuse = isRefuse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IngredientObjectItemsComponents withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pct_weight")
    public Double pctWeight;
    public IngredientObjectItemsComponents withPctWeight(Double pctWeight) {
        this.pctWeight = pctWeight;
        return this;
    }
}