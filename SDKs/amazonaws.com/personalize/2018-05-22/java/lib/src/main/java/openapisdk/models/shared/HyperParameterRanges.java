package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HyperParameterRanges
 * Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.
**/
public class HyperParameterRanges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoricalHyperParameterRanges")
    public CategoricalHyperParameterRange[] categoricalHyperParameterRanges;
    public HyperParameterRanges withCategoricalHyperParameterRanges(CategoricalHyperParameterRange[] categoricalHyperParameterRanges) {
        this.categoricalHyperParameterRanges = categoricalHyperParameterRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continuousHyperParameterRanges")
    public ContinuousHyperParameterRange[] continuousHyperParameterRanges;
    public HyperParameterRanges withContinuousHyperParameterRanges(ContinuousHyperParameterRange[] continuousHyperParameterRanges) {
        this.continuousHyperParameterRanges = continuousHyperParameterRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integerHyperParameterRanges")
    public IntegerHyperParameterRange[] integerHyperParameterRanges;
    public HyperParameterRanges withIntegerHyperParameterRanges(IntegerHyperParameterRange[] integerHyperParameterRanges) {
        this.integerHyperParameterRanges = integerHyperParameterRanges;
        return this;
    }
}