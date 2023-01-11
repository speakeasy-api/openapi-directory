package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteInvitationsRequestBody {
    @JsonProperty("accountIds")
    public String[] accountIds;
    public DeleteInvitationsRequestBody withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
}