package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DefaultIntegerHyperParameterRange
 * Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).
**/
public class DefaultIntegerHyperParameterRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isTunable")
    public Boolean isTunable;
    public DefaultIntegerHyperParameterRange withIsTunable(Boolean isTunable) {
        this.isTunable = isTunable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public Long maxValue;
    public DefaultIntegerHyperParameterRange withMaxValue(Long maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public Long minValue;
    public DefaultIntegerHyperParameterRange withMinValue(Long minValue) {
        this.minValue = minValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DefaultIntegerHyperParameterRange withName(String name) {
        this.name = name;
        return this;
    }
}