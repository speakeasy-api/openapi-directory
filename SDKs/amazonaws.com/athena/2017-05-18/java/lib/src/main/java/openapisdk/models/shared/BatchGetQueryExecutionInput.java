package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetQueryExecutionInput {
    @JsonProperty("QueryExecutionIds")
    public String[] queryExecutionIds;
    public BatchGetQueryExecutionInput withQueryExecutionIds(String[] queryExecutionIds) {
        this.queryExecutionIds = queryExecutionIds;
        return this;
    }
}