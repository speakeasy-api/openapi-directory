package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProactiveInsight
 * Details about a proactive insight. This object is returned by <code>ListInsights</code>.
**/
public class ProactiveInsight {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProactiveInsight withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightTimeRange")
    public InsightTimeRange insightTimeRange;
    public ProactiveInsight withInsightTimeRange(InsightTimeRange insightTimeRange) {
        this.insightTimeRange = insightTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ProactiveInsight withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictionTimeRange")
    public PredictionTimeRange predictionTimeRange;
    public ProactiveInsight withPredictionTimeRange(PredictionTimeRange predictionTimeRange) {
        this.predictionTimeRange = predictionTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCollection")
    public ResourceCollection resourceCollection;
    public ProactiveInsight withResourceCollection(ResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Severity")
    public InsightSeverityEnum severity;
    public ProactiveInsight withSeverity(InsightSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SsmOpsItemId")
    public String ssmOpsItemId;
    public ProactiveInsight withSsmOpsItemId(String ssmOpsItemId) {
        this.ssmOpsItemId = ssmOpsItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public InsightStatusEnum status;
    public ProactiveInsight withStatus(InsightStatusEnum status) {
        this.status = status;
        return this;
    }
}