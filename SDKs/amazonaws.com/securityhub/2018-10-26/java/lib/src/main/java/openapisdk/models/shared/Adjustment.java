package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Adjustment
 * An adjustment to the CVSS metric.
**/
public class Adjustment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Metric")
    public String metric;
    public Adjustment withMetric(String metric) {
        this.metric = metric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reason")
    public String reason;
    public Adjustment withReason(String reason) {
        this.reason = reason;
        return this;
    }
}