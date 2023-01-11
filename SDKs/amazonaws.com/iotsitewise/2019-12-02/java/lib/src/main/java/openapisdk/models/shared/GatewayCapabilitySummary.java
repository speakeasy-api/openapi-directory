package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GatewayCapabilitySummary
 * Contains a summary of a gateway capability configuration.
**/
public class GatewayCapabilitySummary {
    @JsonProperty("capabilityNamespace")
    public String capabilityNamespace;
    public GatewayCapabilitySummary withCapabilityNamespace(String capabilityNamespace) {
        this.capabilityNamespace = capabilityNamespace;
        return this;
    }
    @JsonProperty("capabilitySyncStatus")
    public CapabilitySyncStatusEnum capabilitySyncStatus;
    public GatewayCapabilitySummary withCapabilitySyncStatus(CapabilitySyncStatusEnum capabilitySyncStatus) {
        this.capabilitySyncStatus = capabilitySyncStatus;
        return this;
    }
}