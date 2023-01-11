package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecuteStatementRequest
 * Specifies a request to execute a statement.
**/
public class ExecuteStatementRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public ValueHolder[] parameters;
    public ExecuteStatementRequest withParameters(ValueHolder[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("Statement")
    public String statement;
    public ExecuteStatementRequest withStatement(String statement) {
        this.statement = statement;
        return this;
    }
    @JsonProperty("TransactionId")
    public String transactionId;
    public ExecuteStatementRequest withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}