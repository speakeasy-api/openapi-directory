package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountDetails
 * The details of an Amazon Web Services account.
**/
public class AccountDetails {
    @JsonProperty("AccountId")
    public String accountId;
    public AccountDetails withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Email")
    public String email;
    public AccountDetails withEmail(String email) {
        this.email = email;
        return this;
    }
}