package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVpceConfigurationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpceConfiguration")
    public VpceConfiguration vpceConfiguration;
    public CreateVpceConfigurationResult withVpceConfiguration(VpceConfiguration vpceConfiguration) {
        this.vpceConfiguration = vpceConfiguration;
        return this;
    }
}