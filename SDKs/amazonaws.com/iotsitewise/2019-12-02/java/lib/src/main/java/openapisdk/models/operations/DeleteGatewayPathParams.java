package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGatewayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gatewayId")
    public String gatewayId;
    public DeleteGatewayPathParams withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
}