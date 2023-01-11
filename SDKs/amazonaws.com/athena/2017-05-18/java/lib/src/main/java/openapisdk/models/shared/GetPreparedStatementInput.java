package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPreparedStatementInput {
    @JsonProperty("StatementName")
    public String statementName;
    public GetPreparedStatementInput withStatementName(String statementName) {
        this.statementName = statementName;
        return this;
    }
    @JsonProperty("WorkGroup")
    public String workGroup;
    public GetPreparedStatementInput withWorkGroup(String workGroup) {
        this.workGroup = workGroup;
        return this;
    }
}