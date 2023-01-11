package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGatewayRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public CreateGatewayRoutePathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=virtualGatewayName")
    public String virtualGatewayName;
    public CreateGatewayRoutePathParams withVirtualGatewayName(String virtualGatewayName) {
        this.virtualGatewayName = virtualGatewayName;
        return this;
    }
}