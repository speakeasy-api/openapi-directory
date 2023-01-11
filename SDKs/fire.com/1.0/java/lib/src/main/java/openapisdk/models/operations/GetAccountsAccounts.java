package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountsAccounts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public GetAccountsAccountsAccount[] accounts;
    public GetAccountsAccounts withAccounts(GetAccountsAccountsAccount[] accounts) {
        this.accounts = accounts;
        return this;
    }
}