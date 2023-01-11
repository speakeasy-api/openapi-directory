package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InviteMembersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedAccounts")
    public Result[] unprocessedAccounts;
    public InviteMembersResponse withUnprocessedAccounts(Result[] unprocessedAccounts) {
        this.unprocessedAccounts = unprocessedAccounts;
        return this;
    }
}