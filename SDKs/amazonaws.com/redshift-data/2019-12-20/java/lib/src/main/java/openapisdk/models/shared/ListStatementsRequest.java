package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListStatementsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListStatementsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListStatementsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleLevel")
    public Boolean roleLevel;
    public ListStatementsRequest withRoleLevel(Boolean roleLevel) {
        this.roleLevel = roleLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatementName")
    public String statementName;
    public ListStatementsRequest withStatementName(String statementName) {
        this.statementName = statementName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public StatusStringEnum status;
    public ListStatementsRequest withStatus(StatusStringEnum status) {
        this.status = status;
        return this;
    }
}