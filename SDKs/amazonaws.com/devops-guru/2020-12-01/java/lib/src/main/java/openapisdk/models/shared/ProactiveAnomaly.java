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
 * ProactiveAnomaly
 * Information about an anomaly. This object is returned by <code>ListAnomalies</code>.
**/
public class ProactiveAnomaly {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyReportedTimeRange")
    public AnomalyReportedTimeRange anomalyReportedTimeRange;
    public ProactiveAnomaly withAnomalyReportedTimeRange(AnomalyReportedTimeRange anomalyReportedTimeRange) {
        this.anomalyReportedTimeRange = anomalyReportedTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyTimeRange")
    public AnomalyTimeRange anomalyTimeRange;
    public ProactiveAnomaly withAnomalyTimeRange(AnomalyTimeRange anomalyTimeRange) {
        this.anomalyTimeRange = anomalyTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociatedInsightId")
    public String associatedInsightId;
    public ProactiveAnomaly withAssociatedInsightId(String associatedInsightId) {
        this.associatedInsightId = associatedInsightId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProactiveAnomaly withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Double limit;
    public ProactiveAnomaly withLimit(Double limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictionTimeRange")
    public PredictionTimeRange predictionTimeRange;
    public ProactiveAnomaly withPredictionTimeRange(PredictionTimeRange predictionTimeRange) {
        this.predictionTimeRange = predictionTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCollection")
    public ResourceCollection resourceCollection;
    public ProactiveAnomaly withResourceCollection(ResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Severity")
    public AnomalySeverityEnum severity;
    public ProactiveAnomaly withSeverity(AnomalySeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceDetails")
    public AnomalySourceDetails sourceDetails;
    public ProactiveAnomaly withSourceDetails(AnomalySourceDetails sourceDetails) {
        this.sourceDetails = sourceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public AnomalyStatusEnum status;
    public ProactiveAnomaly withStatus(AnomalyStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public ProactiveAnomaly withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}