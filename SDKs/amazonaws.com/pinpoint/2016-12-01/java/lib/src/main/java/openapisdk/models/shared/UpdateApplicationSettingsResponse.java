package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApplicationSettingsResponse {
    @JsonProperty("ApplicationSettingsResource")
    public ApplicationSettingsResource applicationSettingsResource;
    public UpdateApplicationSettingsResponse withApplicationSettingsResource(ApplicationSettingsResource applicationSettingsResource) {
        this.applicationSettingsResource = applicationSettingsResource;
        return this;
    }
}