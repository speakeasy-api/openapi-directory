package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReactiveInsight
 *  Information about a reactive insight. This object is returned by <code>ListInsights</code>. 
**/
public class ReactiveInsight {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ReactiveInsight withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightTimeRange")
    public InsightTimeRange insightTimeRange;
    public ReactiveInsight withInsightTimeRange(InsightTimeRange insightTimeRange) {
        this.insightTimeRange = insightTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ReactiveInsight withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCollection")
    public ResourceCollection resourceCollection;
    public ReactiveInsight withResourceCollection(ResourceCollection resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Severity")
    public InsightSeverityEnum severity;
    public ReactiveInsight withSeverity(InsightSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SsmOpsItemId")
    public String ssmOpsItemId;
    public ReactiveInsight withSsmOpsItemId(String ssmOpsItemId) {
        this.ssmOpsItemId = ssmOpsItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public InsightStatusEnum status;
    public ReactiveInsight withStatus(InsightStatusEnum status) {
        this.status = status;
        return this;
    }
}