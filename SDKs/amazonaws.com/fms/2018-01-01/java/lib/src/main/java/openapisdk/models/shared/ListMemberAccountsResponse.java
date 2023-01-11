package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMemberAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MemberAccounts")
    public String[] memberAccounts;
    public ListMemberAccountsResponse withMemberAccounts(String[] memberAccounts) {
        this.memberAccounts = memberAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMemberAccountsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}