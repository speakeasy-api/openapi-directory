package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeGatewayCapabilityConfigurationResponse {
    @JsonProperty("capabilityConfiguration")
    public String capabilityConfiguration;
    public DescribeGatewayCapabilityConfigurationResponse withCapabilityConfiguration(String capabilityConfiguration) {
        this.capabilityConfiguration = capabilityConfiguration;
        return this;
    }
    @JsonProperty("capabilityNamespace")
    public String capabilityNamespace;
    public DescribeGatewayCapabilityConfigurationResponse withCapabilityNamespace(String capabilityNamespace) {
        this.capabilityNamespace = capabilityNamespace;
        return this;
    }
    @JsonProperty("capabilitySyncStatus")
    public CapabilitySyncStatusEnum capabilitySyncStatus;
    public DescribeGatewayCapabilityConfigurationResponse withCapabilitySyncStatus(CapabilitySyncStatusEnum capabilitySyncStatus) {
        this.capabilitySyncStatus = capabilitySyncStatus;
        return this;
    }
    @JsonProperty("gatewayId")
    public String gatewayId;
    public DescribeGatewayCapabilityConfigurationResponse withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
}