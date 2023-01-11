package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopQueryRequest {
    @JsonProperty("queryId")
    public String queryId;
    public StopQueryRequest withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
}