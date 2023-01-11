package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGatewayRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gatewayRouteName")
    public String gatewayRouteName;
    public DeleteGatewayRoutePathParams withGatewayRouteName(String gatewayRouteName) {
        this.gatewayRouteName = gatewayRouteName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public DeleteGatewayRoutePathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=virtualGatewayName")
    public String virtualGatewayName;
    public DeleteGatewayRoutePathParams withVirtualGatewayName(String virtualGatewayName) {
        this.virtualGatewayName = virtualGatewayName;
        return this;
    }
}