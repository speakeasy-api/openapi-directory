package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountMasterUserMasterUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public AccountMasterUserMasterUserData data;
    public AccountMasterUserMasterUser withData(AccountMasterUserMasterUserData data) {
        this.data = data;
        return this;
    }
}