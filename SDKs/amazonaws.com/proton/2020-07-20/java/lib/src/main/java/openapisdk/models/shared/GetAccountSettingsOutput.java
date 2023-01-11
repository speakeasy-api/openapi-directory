package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountSettingsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountSettings")
    public AccountSettings accountSettings;
    public GetAccountSettingsOutput withAccountSettings(AccountSettings accountSettings) {
        this.accountSettings = accountSettings;
        return this;
    }
}