package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMembersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MemberDetails")
    public MemberDetail[] memberDetails;
    public GetMembersResponse withMemberDetails(MemberDetail[] memberDetails) {
        this.memberDetails = memberDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedAccounts")
    public UnprocessedAccount[] unprocessedAccounts;
    public GetMembersResponse withUnprocessedAccounts(UnprocessedAccount[] unprocessedAccounts) {
        this.unprocessedAccounts = unprocessedAccounts;
        return this;
    }
}