package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartQueryExecutionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueryExecutionId")
    public String queryExecutionId;
    public StartQueryExecutionOutput withQueryExecutionId(String queryExecutionId) {
        this.queryExecutionId = queryExecutionId;
        return this;
    }
}