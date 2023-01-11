package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminSetSettingsRequestBody {
    @JsonProperty("settings")
    public String settings;
    public EnterpriseAdminSetSettingsRequestBody withSettings(String settings) {
        this.settings = settings;
        return this;
    }
}