package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePreparedStatementInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdatePreparedStatementInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("QueryStatement")
    public String queryStatement;
    public UpdatePreparedStatementInput withQueryStatement(String queryStatement) {
        this.queryStatement = queryStatement;
        return this;
    }
    @JsonProperty("StatementName")
    public String statementName;
    public UpdatePreparedStatementInput withStatementName(String statementName) {
        this.statementName = statementName;
        return this;
    }
    @JsonProperty("WorkGroup")
    public String workGroup;
    public UpdatePreparedStatementInput withWorkGroup(String workGroup) {
        this.workGroup = workGroup;
        return this;
    }
}