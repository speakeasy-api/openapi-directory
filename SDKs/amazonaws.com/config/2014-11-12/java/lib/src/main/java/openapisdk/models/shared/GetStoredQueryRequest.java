package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetStoredQueryRequest {
    @JsonProperty("QueryName")
    public String queryName;
    public GetStoredQueryRequest withQueryName(String queryName) {
        this.queryName = queryName;
        return this;
    }
}