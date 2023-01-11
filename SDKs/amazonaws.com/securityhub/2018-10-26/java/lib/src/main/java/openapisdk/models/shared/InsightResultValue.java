package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InsightResultValue
 * The insight result values returned by the <code>GetInsightResults</code> operation.
**/
public class InsightResultValue {
    @JsonProperty("Count")
    public Long count;
    public InsightResultValue withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonProperty("GroupByAttributeValue")
    public String groupByAttributeValue;
    public InsightResultValue withGroupByAttributeValue(String groupByAttributeValue) {
        this.groupByAttributeValue = groupByAttributeValue;
        return this;
    }
}