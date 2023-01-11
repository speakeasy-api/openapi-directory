package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMembersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Members")
    public MemberDetail[] members;
    public CreateMembersResponse withMembers(MemberDetail[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedAccounts")
    public UnprocessedAccount[] unprocessedAccounts;
    public CreateMembersResponse withUnprocessedAccounts(UnprocessedAccount[] unprocessedAccounts) {
        this.unprocessedAccounts = unprocessedAccounts;
        return this;
    }
}