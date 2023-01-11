package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSynchronizationList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountSynchronizations")
    public AccountSynchronization[] accountSynchronizations;
    public AccountSynchronizationList withAccountSynchronizations(AccountSynchronization[] accountSynchronizations) {
        this.accountSynchronizations = accountSynchronizations;
        return this;
    }
}