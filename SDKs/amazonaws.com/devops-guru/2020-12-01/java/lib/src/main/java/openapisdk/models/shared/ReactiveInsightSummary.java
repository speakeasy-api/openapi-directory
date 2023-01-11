package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReactiveInsightSummary
 *  Information about a reactive insight. This object is returned by <code>DescribeInsight.</code> 
**/
public class ReactiveInsightSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ReactiveInsightSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightTimeRange")
    public InsightTimeRange insightTimeRange;
    public ReactiveInsightSummary withInsightTimeRange(InsightTimeRange insightTimeRange) {
        this.insightTimeRange = insightTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ReactiveInsightSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCollection")
    public ResourceCollection resourceCollection;
    public ReactiveInsightSummary withResourceCollection(ResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceCollection")
    public ServiceCollection serviceCollection;
    public ReactiveInsightSummary withServiceCollection(ServiceCollection serviceCollection) {
        this.serviceCollection = serviceCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Severity")
    public InsightSeverityEnum severity;
    public ReactiveInsightSummary withSeverity(InsightSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public InsightStatusEnum status;
    public ReactiveInsightSummary withStatus(InsightStatusEnum status) {
        this.status = status;
        return this;
    }
}