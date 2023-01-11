package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DefaultHyperParameterRanges
 * Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.
**/
public class DefaultHyperParameterRanges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoricalHyperParameterRanges")
    public DefaultCategoricalHyperParameterRange[] categoricalHyperParameterRanges;
    public DefaultHyperParameterRanges withCategoricalHyperParameterRanges(DefaultCategoricalHyperParameterRange[] categoricalHyperParameterRanges) {
        this.categoricalHyperParameterRanges = categoricalHyperParameterRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continuousHyperParameterRanges")
    public DefaultContinuousHyperParameterRange[] continuousHyperParameterRanges;
    public DefaultHyperParameterRanges withContinuousHyperParameterRanges(DefaultContinuousHyperParameterRange[] continuousHyperParameterRanges) {
        this.continuousHyperParameterRanges = continuousHyperParameterRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integerHyperParameterRanges")
    public DefaultIntegerHyperParameterRange[] integerHyperParameterRanges;
    public DefaultHyperParameterRanges withIntegerHyperParameterRanges(DefaultIntegerHyperParameterRange[] integerHyperParameterRanges) {
        this.integerHyperParameterRanges = integerHyperParameterRanges;
        return this;
    }
}