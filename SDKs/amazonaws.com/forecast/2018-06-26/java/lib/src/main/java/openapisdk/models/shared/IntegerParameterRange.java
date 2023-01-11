package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IntegerParameterRange
 * Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
**/
public class IntegerParameterRange {
    @JsonProperty("MaxValue")
    public Long maxValue;
    public IntegerParameterRange withMaxValue(Long maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonProperty("MinValue")
    public Long minValue;
    public IntegerParameterRange withMinValue(Long minValue) {
        this.minValue = minValue;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public IntegerParameterRange withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingType")
    public ScalingTypeEnum scalingType;
    public IntegerParameterRange withScalingType(ScalingTypeEnum scalingType) {
        this.scalingType = scalingType;
        return this;
    }
}