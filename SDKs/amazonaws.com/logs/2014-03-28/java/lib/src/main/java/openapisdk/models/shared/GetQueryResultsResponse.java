package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQueryResultsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public ResultField[][] results;
    public GetQueryResultsResponse withResults(ResultField[][] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistics")
    public QueryStatistics statistics;
    public GetQueryResultsResponse withStatistics(QueryStatistics statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public QueryStatusEnum status;
    public GetQueryResultsResponse withStatus(QueryStatusEnum status) {
        this.status = status;
        return this;
    }
}