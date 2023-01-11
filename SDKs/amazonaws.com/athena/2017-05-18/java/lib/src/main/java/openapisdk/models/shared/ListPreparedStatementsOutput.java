package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPreparedStatementsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPreparedStatementsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreparedStatements")
    public PreparedStatementSummary[] preparedStatements;
    public ListPreparedStatementsOutput withPreparedStatements(PreparedStatementSummary[] preparedStatements) {
        this.preparedStatements = preparedStatements;
        return this;
    }
}