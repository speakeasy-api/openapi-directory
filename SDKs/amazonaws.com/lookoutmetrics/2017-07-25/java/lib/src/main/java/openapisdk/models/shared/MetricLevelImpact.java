package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricLevelImpact
 * Details about a measure affected by an anomaly.
**/
public class MetricLevelImpact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContributionMatrix")
    public ContributionMatrix contributionMatrix;
    public MetricLevelImpact withContributionMatrix(ContributionMatrix contributionMatrix) {
        this.contributionMatrix = contributionMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricName")
    public String metricName;
    public MetricLevelImpact withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumTimeSeries")
    public Long numTimeSeries;
    public MetricLevelImpact withNumTimeSeries(Long numTimeSeries) {
        this.numTimeSeries = numTimeSeries;
        return this;
    }
}