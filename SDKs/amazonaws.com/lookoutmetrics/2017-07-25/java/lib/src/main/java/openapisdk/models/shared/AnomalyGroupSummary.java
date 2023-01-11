package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnomalyGroupSummary
 * Details about a group of anomalous metrics.
**/
public class AnomalyGroupSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyGroupId")
    public String anomalyGroupId;
    public AnomalyGroupSummary withAnomalyGroupId(String anomalyGroupId) {
        this.anomalyGroupId = anomalyGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyGroupScore")
    public Double anomalyGroupScore;
    public AnomalyGroupSummary withAnomalyGroupScore(Double anomalyGroupScore) {
        this.anomalyGroupScore = anomalyGroupScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndTime")
    public String endTime;
    public AnomalyGroupSummary withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryMetricName")
    public String primaryMetricName;
    public AnomalyGroupSummary withPrimaryMetricName(String primaryMetricName) {
        this.primaryMetricName = primaryMetricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartTime")
    public String startTime;
    public AnomalyGroupSummary withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}