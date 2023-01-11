package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateRouteTableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateRouteTableActionEnum action;
    public PostAssociateRouteTableQueryParams withAction(PostAssociateRouteTableActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateRouteTableVersionEnum version;
    public PostAssociateRouteTableQueryParams withVersion(PostAssociateRouteTableVersionEnum version) {
        this.version = version;
        return this;
    }
}