package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricDistribution
 * This complex data type describes the metric distribution by basis.
**/
public class MetricDistribution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basis")
    public String basis;
    public MetricDistribution withBasis(String basis) {
        this.basis = basis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Distribution[] data;
    public MetricDistribution withData(Distribution[] data) {
        this.data = data;
        return this;
    }
}