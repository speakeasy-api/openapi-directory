package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeclineInvitationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unprocessedAccounts")
    public UnprocessedAccount[] unprocessedAccounts;
    public DeclineInvitationsResponse withUnprocessedAccounts(UnprocessedAccount[] unprocessedAccounts) {
        this.unprocessedAccounts = unprocessedAccounts;
        return this;
    }
}