package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGatewayCapabilityConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gatewayId")
    public String gatewayId;
    public UpdateGatewayCapabilityConfigurationPathParams withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
}