package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateGatewayCapabilityConfigurationRequestBody {
    @JsonProperty("capabilityConfiguration")
    public String capabilityConfiguration;
    public UpdateGatewayCapabilityConfigurationRequestBody withCapabilityConfiguration(String capabilityConfiguration) {
        this.capabilityConfiguration = capabilityConfiguration;
        return this;
    }
    @JsonProperty("capabilityNamespace")
    public String capabilityNamespace;
    public UpdateGatewayCapabilityConfigurationRequestBody withCapabilityNamespace(String capabilityNamespace) {
        this.capabilityNamespace = capabilityNamespace;
        return this;
    }
}