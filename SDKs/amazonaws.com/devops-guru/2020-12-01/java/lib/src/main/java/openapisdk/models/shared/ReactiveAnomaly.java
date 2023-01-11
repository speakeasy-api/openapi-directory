package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReactiveAnomaly
 * Details about a reactive anomaly. This object is returned by <code>ListAnomalies</code>.
**/
public class ReactiveAnomaly {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyReportedTimeRange")
    public AnomalyReportedTimeRange anomalyReportedTimeRange;
    public ReactiveAnomaly withAnomalyReportedTimeRange(AnomalyReportedTimeRange anomalyReportedTimeRange) {
        this.anomalyReportedTimeRange = anomalyReportedTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyTimeRange")
    public AnomalyTimeRange anomalyTimeRange;
    public ReactiveAnomaly withAnomalyTimeRange(AnomalyTimeRange anomalyTimeRange) {
        this.anomalyTimeRange = anomalyTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociatedInsightId")
    public String associatedInsightId;
    public ReactiveAnomaly withAssociatedInsightId(String associatedInsightId) {
        this.associatedInsightId = associatedInsightId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ReactiveAnomaly withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCollection")
    public ResourceCollection resourceCollection;
    public ReactiveAnomaly withResourceCollection(ResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Severity")
    public AnomalySeverityEnum severity;
    public ReactiveAnomaly withSeverity(AnomalySeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceDetails")
    public AnomalySourceDetails sourceDetails;
    public ReactiveAnomaly withSourceDetails(AnomalySourceDetails sourceDetails) {
        this.sourceDetails = sourceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public AnomalyStatusEnum status;
    public ReactiveAnomaly withStatus(AnomalyStatusEnum status) {
        this.status = status;
        return this;
    }
}