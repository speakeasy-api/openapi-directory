package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGatewayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gatewayId")
    public String gatewayId;
    public UpdateGatewayPathParams withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
}