package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DefaultContinuousHyperParameterRange
 * Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
**/
public class DefaultContinuousHyperParameterRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isTunable")
    public Boolean isTunable;
    public DefaultContinuousHyperParameterRange withIsTunable(Boolean isTunable) {
        this.isTunable = isTunable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public Double maxValue;
    public DefaultContinuousHyperParameterRange withMaxValue(Double maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public Double minValue;
    public DefaultContinuousHyperParameterRange withMinValue(Double minValue) {
        this.minValue = minValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DefaultContinuousHyperParameterRange withName(String name) {
        this.name = name;
        return this;
    }
}