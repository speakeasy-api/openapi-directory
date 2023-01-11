package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGatewayRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gatewayRouteName")
    public String gatewayRouteName;
    public UpdateGatewayRoutePathParams withGatewayRouteName(String gatewayRouteName) {
        this.gatewayRouteName = gatewayRouteName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public UpdateGatewayRoutePathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=virtualGatewayName")
    public String virtualGatewayName;
    public UpdateGatewayRoutePathParams withVirtualGatewayName(String virtualGatewayName) {
        this.virtualGatewayName = virtualGatewayName;
        return this;
    }
}