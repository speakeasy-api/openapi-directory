package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContinuousParameterRange
 * Specifies a continuous hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
**/
public class ContinuousParameterRange {
    @JsonProperty("MaxValue")
    public Double maxValue;
    public ContinuousParameterRange withMaxValue(Double maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonProperty("MinValue")
    public Double minValue;
    public ContinuousParameterRange withMinValue(Double minValue) {
        this.minValue = minValue;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public ContinuousParameterRange withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingType")
    public ScalingTypeEnum scalingType;
    public ContinuousParameterRange withScalingType(ScalingTypeEnum scalingType) {
        this.scalingType = scalingType;
        return this;
    }
}