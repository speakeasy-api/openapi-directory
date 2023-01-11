package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeclineInvitationsRequestBody {
    @JsonProperty("accountIds")
    public String[] accountIds;
    public DeclineInvitationsRequestBody withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
}