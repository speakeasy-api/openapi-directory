package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAccountSettingsOutput {
    @JsonProperty("accountSettings")
    public AccountSettings accountSettings;
    public UpdateAccountSettingsOutput withAccountSettings(AccountSettings accountSettings) {
        this.accountSettings = accountSettings;
        return this;
    }
}