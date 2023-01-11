package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGatewayRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gatewayRouteName")
    public String gatewayRouteName;
    public DescribeGatewayRoutePathParams withGatewayRouteName(String gatewayRouteName) {
        this.gatewayRouteName = gatewayRouteName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public DescribeGatewayRoutePathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=virtualGatewayName")
    public String virtualGatewayName;
    public DescribeGatewayRoutePathParams withVirtualGatewayName(String virtualGatewayName) {
        this.virtualGatewayName = virtualGatewayName;
        return this;
    }
}