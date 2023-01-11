package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PercentPair
 * Describes the percentile and percentile value.
**/
public class PercentPair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percent")
    public Double percent;
    public PercentPair withPercent(Double percent) {
        this.percent = percent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public PercentPair withValue(Double value) {
        this.value = value;
        return this;
    }
}