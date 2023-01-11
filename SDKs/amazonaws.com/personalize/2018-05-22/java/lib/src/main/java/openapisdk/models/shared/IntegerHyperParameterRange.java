package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IntegerHyperParameterRange
 * Provides the name and range of an integer-valued hyperparameter.
**/
public class IntegerHyperParameterRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public Long maxValue;
    public IntegerHyperParameterRange withMaxValue(Long maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public Long minValue;
    public IntegerHyperParameterRange withMinValue(Long minValue) {
        this.minValue = minValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IntegerHyperParameterRange withName(String name) {
        this.name = name;
        return this;
    }
}