package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMembersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Members")
    public Member[] members;
    public GetMembersResponse withMembers(Member[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedAccounts")
    public Result[] unprocessedAccounts;
    public GetMembersResponse withUnprocessedAccounts(Result[] unprocessedAccounts) {
        this.unprocessedAccounts = unprocessedAccounts;
        return this;
    }
}