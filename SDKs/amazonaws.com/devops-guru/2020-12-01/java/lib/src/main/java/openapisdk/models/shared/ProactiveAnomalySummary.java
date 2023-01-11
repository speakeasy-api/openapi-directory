package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ProactiveAnomalySummary
 * Details about a proactive anomaly. This object is returned by <code>DescribeAnomaly.</code> 
**/
public class ProactiveAnomalySummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyReportedTimeRange")
    public AnomalyReportedTimeRange anomalyReportedTimeRange;
    public ProactiveAnomalySummary withAnomalyReportedTimeRange(AnomalyReportedTimeRange anomalyReportedTimeRange) {
        this.anomalyReportedTimeRange = anomalyReportedTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyTimeRange")
    public AnomalyTimeRange anomalyTimeRange;
    public ProactiveAnomalySummary withAnomalyTimeRange(AnomalyTimeRange anomalyTimeRange) {
        this.anomalyTimeRange = anomalyTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociatedInsightId")
    public String associatedInsightId;
    public ProactiveAnomalySummary withAssociatedInsightId(String associatedInsightId) {
        this.associatedInsightId = associatedInsightId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProactiveAnomalySummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Double limit;
    public ProactiveAnomalySummary withLimit(Double limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictionTimeRange")
    public PredictionTimeRange predictionTimeRange;
    public ProactiveAnomalySummary withPredictionTimeRange(PredictionTimeRange predictionTimeRange) {
        this.predictionTimeRange = predictionTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCollection")
    public ResourceCollection resourceCollection;
    public ProactiveAnomalySummary withResourceCollection(ResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Severity")
    public AnomalySeverityEnum severity;
    public ProactiveAnomalySummary withSeverity(AnomalySeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceDetails")
    public AnomalySourceDetails sourceDetails;
    public ProactiveAnomalySummary withSourceDetails(AnomalySourceDetails sourceDetails) {
        this.sourceDetails = sourceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public AnomalyStatusEnum status;
    public ProactiveAnomalySummary withStatus(AnomalyStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public ProactiveAnomalySummary withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}