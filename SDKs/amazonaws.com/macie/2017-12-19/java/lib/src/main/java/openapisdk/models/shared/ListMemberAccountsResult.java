package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMemberAccountsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberAccounts")
    public MemberAccount[] memberAccounts;
    public ListMemberAccountsResult withMemberAccounts(MemberAccount[] memberAccounts) {
        this.memberAccounts = memberAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListMemberAccountsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}