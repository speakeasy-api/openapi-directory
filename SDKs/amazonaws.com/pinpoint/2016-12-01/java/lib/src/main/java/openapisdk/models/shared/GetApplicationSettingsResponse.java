package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetApplicationSettingsResponse {
    @JsonProperty("ApplicationSettingsResource")
    public ApplicationSettingsResource applicationSettingsResource;
    public GetApplicationSettingsResponse withApplicationSettingsResource(ApplicationSettingsResource applicationSettingsResource) {
        this.applicationSettingsResource = applicationSettingsResource;
        return this;
    }
}