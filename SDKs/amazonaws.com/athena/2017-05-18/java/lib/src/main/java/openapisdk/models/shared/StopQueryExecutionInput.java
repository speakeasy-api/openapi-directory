package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopQueryExecutionInput {
    @JsonProperty("QueryExecutionId")
    public String queryExecutionId;
    public StopQueryExecutionInput withQueryExecutionId(String queryExecutionId) {
        this.queryExecutionId = queryExecutionId;
        return this;
    }
}