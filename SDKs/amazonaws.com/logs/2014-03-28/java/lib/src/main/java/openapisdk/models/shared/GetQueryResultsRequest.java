package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetQueryResultsRequest {
    @JsonProperty("queryId")
    public String queryId;
    public GetQueryResultsRequest withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
}