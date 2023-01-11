package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContinuousHyperParameterRange
 * Provides the name and range of a continuous hyperparameter.
**/
public class ContinuousHyperParameterRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public Double maxValue;
    public ContinuousHyperParameterRange withMaxValue(Double maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public Double minValue;
    public ContinuousHyperParameterRange withMinValue(Double minValue) {
        this.minValue = minValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ContinuousHyperParameterRange withName(String name) {
        this.name = name;
        return this;
    }
}