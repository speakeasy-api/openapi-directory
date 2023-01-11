package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateMembersRequestBody {
    @JsonProperty("AccountIds")
    public String[] accountIds;
    public DisassociateMembersRequestBody withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
}