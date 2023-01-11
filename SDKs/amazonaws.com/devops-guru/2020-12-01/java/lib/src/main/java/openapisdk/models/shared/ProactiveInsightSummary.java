package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProactiveInsightSummary
 * Details about a proactive insight. This object is returned by <code>DescribeInsight.</code> 
**/
public class ProactiveInsightSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProactiveInsightSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightTimeRange")
    public InsightTimeRange insightTimeRange;
    public ProactiveInsightSummary withInsightTimeRange(InsightTimeRange insightTimeRange) {
        this.insightTimeRange = insightTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ProactiveInsightSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictionTimeRange")
    public PredictionTimeRange predictionTimeRange;
    public ProactiveInsightSummary withPredictionTimeRange(PredictionTimeRange predictionTimeRange) {
        this.predictionTimeRange = predictionTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCollection")
    public ResourceCollection resourceCollection;
    public ProactiveInsightSummary withResourceCollection(ResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceCollection")
    public ServiceCollection serviceCollection;
    public ProactiveInsightSummary withServiceCollection(ServiceCollection serviceCollection) {
        this.serviceCollection = serviceCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Severity")
    public InsightSeverityEnum severity;
    public ProactiveInsightSummary withSeverity(InsightSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public InsightStatusEnum status;
    public ProactiveInsightSummary withStatus(InsightStatusEnum status) {
        this.status = status;
        return this;
    }
}