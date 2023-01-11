package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePreparedStatementInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreatePreparedStatementInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("QueryStatement")
    public String queryStatement;
    public CreatePreparedStatementInput withQueryStatement(String queryStatement) {
        this.queryStatement = queryStatement;
        return this;
    }
    @JsonProperty("StatementName")
    public String statementName;
    public CreatePreparedStatementInput withStatementName(String statementName) {
        this.statementName = statementName;
        return this;
    }
    @JsonProperty("WorkGroup")
    public String workGroup;
    public CreatePreparedStatementInput withWorkGroup(String workGroup) {
        this.workGroup = workGroup;
        return this;
    }
}