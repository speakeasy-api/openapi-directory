package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateMemberAccountRequest {
    @JsonProperty("memberAccountId")
    public String memberAccountId;
    public AssociateMemberAccountRequest withMemberAccountId(String memberAccountId) {
        this.memberAccountId = memberAccountId;
        return this;
    }
}