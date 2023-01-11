package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAnomalyGroupSummariesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyGroupStatistics")
    public AnomalyGroupStatistics anomalyGroupStatistics;
    public ListAnomalyGroupSummariesResponse withAnomalyGroupStatistics(AnomalyGroupStatistics anomalyGroupStatistics) {
        this.anomalyGroupStatistics = anomalyGroupStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyGroupSummaryList")
    public AnomalyGroupSummary[] anomalyGroupSummaryList;
    public ListAnomalyGroupSummariesResponse withAnomalyGroupSummaryList(AnomalyGroupSummary[] anomalyGroupSummaryList) {
        this.anomalyGroupSummaryList = anomalyGroupSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAnomalyGroupSummariesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}