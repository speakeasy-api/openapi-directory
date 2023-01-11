package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartQueryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryId")
    public String queryId;
    public StartQueryResponse withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
}