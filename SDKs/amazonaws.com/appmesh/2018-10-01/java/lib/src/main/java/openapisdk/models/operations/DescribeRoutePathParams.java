package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public DescribeRoutePathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=routeName")
    public String routeName;
    public DescribeRoutePathParams withRouteName(String routeName) {
        this.routeName = routeName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=virtualRouterName")
    public String virtualRouterName;
    public DescribeRoutePathParams withVirtualRouterName(String virtualRouterName) {
        this.virtualRouterName = virtualRouterName;
        return this;
    }
}