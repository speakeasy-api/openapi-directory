package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetVpceConfigurationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpceConfiguration")
    public VpceConfiguration vpceConfiguration;
    public GetVpceConfigurationResult withVpceConfiguration(VpceConfiguration vpceConfiguration) {
        this.vpceConfiguration = vpceConfiguration;
        return this;
    }
}