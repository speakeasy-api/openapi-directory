package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountAssignmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountAssignments")
    public AccountAssignment[] accountAssignments;
    public ListAccountAssignmentsResponse withAccountAssignments(AccountAssignment[] accountAssignments) {
        this.accountAssignments = accountAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAccountAssignmentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}