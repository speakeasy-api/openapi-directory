package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateMemberAccountRequest {
    @JsonProperty("memberAccountId")
    public String memberAccountId;
    public DisassociateMemberAccountRequest withMemberAccountId(String memberAccountId) {
        this.memberAccountId = memberAccountId;
        return this;
    }
}