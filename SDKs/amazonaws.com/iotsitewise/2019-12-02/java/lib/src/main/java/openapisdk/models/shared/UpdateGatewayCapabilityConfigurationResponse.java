package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateGatewayCapabilityConfigurationResponse {
    @JsonProperty("capabilityNamespace")
    public String capabilityNamespace;
    public UpdateGatewayCapabilityConfigurationResponse withCapabilityNamespace(String capabilityNamespace) {
        this.capabilityNamespace = capabilityNamespace;
        return this;
    }
    @JsonProperty("capabilitySyncStatus")
    public CapabilitySyncStatusEnum capabilitySyncStatus;
    public UpdateGatewayCapabilityConfigurationResponse withCapabilitySyncStatus(CapabilitySyncStatusEnum capabilitySyncStatus) {
        this.capabilitySyncStatus = capabilitySyncStatus;
        return this;
    }
}