package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeVirtualGatewayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public DescribeVirtualGatewayPathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=virtualGatewayName")
    public String virtualGatewayName;
    public DescribeVirtualGatewayPathParams withVirtualGatewayName(String virtualGatewayName) {
        this.virtualGatewayName = virtualGatewayName;
        return this;
    }
}