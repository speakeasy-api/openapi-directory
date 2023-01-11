package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetQueryExecutionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueryExecutions")
    public QueryExecution[] queryExecutions;
    public BatchGetQueryExecutionOutput withQueryExecutions(QueryExecution[] queryExecutions) {
        this.queryExecutions = queryExecutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedQueryExecutionIds")
    public UnprocessedQueryExecutionId[] unprocessedQueryExecutionIds;
    public BatchGetQueryExecutionOutput withUnprocessedQueryExecutionIds(UnprocessedQueryExecutionId[] unprocessedQueryExecutionIds) {
        this.unprocessedQueryExecutionIds = unprocessedQueryExecutionIds;
        return this;
    }
}