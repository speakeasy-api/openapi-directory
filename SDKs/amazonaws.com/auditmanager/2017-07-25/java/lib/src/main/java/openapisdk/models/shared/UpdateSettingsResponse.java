package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public Settings settings;
    public UpdateSettingsResponse withSettings(Settings settings) {
        this.settings = settings;
        return this;
    }
}