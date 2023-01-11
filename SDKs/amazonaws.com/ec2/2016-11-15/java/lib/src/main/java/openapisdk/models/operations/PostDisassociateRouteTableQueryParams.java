package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateRouteTableQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateRouteTableActionEnum action;
    public PostDisassociateRouteTableQueryParams withAction(PostDisassociateRouteTableActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateRouteTableVersionEnum version;
    public PostDisassociateRouteTableQueryParams withVersion(PostDisassociateRouteTableVersionEnum version) {
        this.version = version;
        return this;
    }
}