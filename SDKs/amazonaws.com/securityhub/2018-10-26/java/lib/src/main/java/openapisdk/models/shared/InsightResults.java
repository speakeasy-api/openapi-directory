package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InsightResults
 * The insight results returned by the <code>GetInsightResults</code> operation.
**/
public class InsightResults {
    @JsonProperty("GroupByAttribute")
    public String groupByAttribute;
    public InsightResults withGroupByAttribute(String groupByAttribute) {
        this.groupByAttribute = groupByAttribute;
        return this;
    }
    @JsonProperty("InsightArn")
    public String insightArn;
    public InsightResults withInsightArn(String insightArn) {
        this.insightArn = insightArn;
        return this;
    }
    @JsonProperty("ResultValues")
    public InsightResultValue[] resultValues;
    public InsightResults withResultValues(InsightResultValue[] resultValues) {
        this.resultValues = resultValues;
        return this;
    }
}