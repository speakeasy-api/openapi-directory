package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InviteMembersRequestBody {
    @JsonProperty("AccountIds")
    public String[] accountIds;
    public InviteMembersRequestBody withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
}