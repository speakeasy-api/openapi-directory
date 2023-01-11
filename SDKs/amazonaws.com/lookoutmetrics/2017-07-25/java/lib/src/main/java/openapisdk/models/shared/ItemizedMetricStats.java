package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemizedMetricStats
 * Aggregated statistics about a measure affected by an anomaly.
**/
public class ItemizedMetricStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricName")
    public String metricName;
    public ItemizedMetricStats withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OccurrenceCount")
    public Long occurrenceCount;
    public ItemizedMetricStats withOccurrenceCount(Long occurrenceCount) {
        this.occurrenceCount = occurrenceCount;
        return this;
    }
}