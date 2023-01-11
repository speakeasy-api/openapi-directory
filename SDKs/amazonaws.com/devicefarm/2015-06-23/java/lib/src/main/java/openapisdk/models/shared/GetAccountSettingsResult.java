package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAccountSettingsResult
 * Represents the account settings return values from the <code>GetAccountSettings</code> request.
**/
public class GetAccountSettingsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountSettings")
    public AccountSettings accountSettings;
    public GetAccountSettingsResult withAccountSettings(AccountSettings accountSettings) {
        this.accountSettings = accountSettings;
        return this;
    }
}