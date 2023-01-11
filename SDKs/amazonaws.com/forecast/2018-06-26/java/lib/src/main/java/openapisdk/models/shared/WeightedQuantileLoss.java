package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WeightedQuantileLoss
 * The weighted loss value for a quantile. This object is part of the <a>Metrics</a> object.
**/
public class WeightedQuantileLoss {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LossValue")
    public Double lossValue;
    public WeightedQuantileLoss withLossValue(Double lossValue) {
        this.lossValue = lossValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quantile")
    public Double quantile;
    public WeightedQuantileLoss withQuantile(Double quantile) {
        this.quantile = quantile;
        return this;
    }
}