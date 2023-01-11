package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetQueryExecutionInput {
    @JsonProperty("QueryExecutionId")
    public String queryExecutionId;
    public GetQueryExecutionInput withQueryExecutionId(String queryExecutionId) {
        this.queryExecutionId = queryExecutionId;
        return this;
    }
}