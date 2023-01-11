package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQueryExecutionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueryExecution")
    public QueryExecution queryExecution;
    public GetQueryExecutionOutput withQueryExecution(QueryExecution queryExecution) {
        this.queryExecution = queryExecution;
        return this;
    }
}