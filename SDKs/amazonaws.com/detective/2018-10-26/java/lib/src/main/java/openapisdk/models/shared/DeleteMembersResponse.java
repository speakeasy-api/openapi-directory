package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteMembersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountIds")
    public String[] accountIds;
    public DeleteMembersResponse withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedAccounts")
    public UnprocessedAccount[] unprocessedAccounts;
    public DeleteMembersResponse withUnprocessedAccounts(UnprocessedAccount[] unprocessedAccounts) {
        this.unprocessedAccounts = unprocessedAccounts;
        return this;
    }
}