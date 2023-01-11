package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteStoredQueryRequest {
    @JsonProperty("QueryName")
    public String queryName;
    public DeleteStoredQueryRequest withQueryName(String queryName) {
        this.queryName = queryName;
        return this;
    }
}