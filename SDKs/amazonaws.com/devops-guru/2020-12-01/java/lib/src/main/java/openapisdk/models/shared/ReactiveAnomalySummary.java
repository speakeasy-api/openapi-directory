package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReactiveAnomalySummary
 * Details about a reactive anomaly. This object is returned by <code>DescribeAnomaly.</code> 
**/
public class ReactiveAnomalySummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyReportedTimeRange")
    public AnomalyReportedTimeRange anomalyReportedTimeRange;
    public ReactiveAnomalySummary withAnomalyReportedTimeRange(AnomalyReportedTimeRange anomalyReportedTimeRange) {
        this.anomalyReportedTimeRange = anomalyReportedTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyTimeRange")
    public AnomalyTimeRange anomalyTimeRange;
    public ReactiveAnomalySummary withAnomalyTimeRange(AnomalyTimeRange anomalyTimeRange) {
        this.anomalyTimeRange = anomalyTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociatedInsightId")
    public String associatedInsightId;
    public ReactiveAnomalySummary withAssociatedInsightId(String associatedInsightId) {
        this.associatedInsightId = associatedInsightId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ReactiveAnomalySummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCollection")
    public ResourceCollection resourceCollection;
    public ReactiveAnomalySummary withResourceCollection(ResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Severity")
    public AnomalySeverityEnum severity;
    public ReactiveAnomalySummary withSeverity(AnomalySeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceDetails")
    public AnomalySourceDetails sourceDetails;
    public ReactiveAnomalySummary withSourceDetails(AnomalySourceDetails sourceDetails) {
        this.sourceDetails = sourceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public AnomalyStatusEnum status;
    public ReactiveAnomalySummary withStatus(AnomalyStatusEnum status) {
        this.status = status;
        return this;
    }
}