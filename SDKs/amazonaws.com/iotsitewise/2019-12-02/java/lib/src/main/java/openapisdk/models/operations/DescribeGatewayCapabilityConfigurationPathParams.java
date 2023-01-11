package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGatewayCapabilityConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=capabilityNamespace")
    public String capabilityNamespace;
    public DescribeGatewayCapabilityConfigurationPathParams withCapabilityNamespace(String capabilityNamespace) {
        this.capabilityNamespace = capabilityNamespace;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gatewayId")
    public String gatewayId;
    public DescribeGatewayCapabilityConfigurationPathParams withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
}