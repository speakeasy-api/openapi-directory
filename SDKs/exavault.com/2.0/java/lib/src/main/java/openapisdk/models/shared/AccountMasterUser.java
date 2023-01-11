package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountMasterUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterUser")
    public AccountMasterUserMasterUser masterUser;
    public AccountMasterUser withMasterUser(AccountMasterUserMasterUser masterUser) {
        this.masterUser = masterUser;
        return this;
    }
}