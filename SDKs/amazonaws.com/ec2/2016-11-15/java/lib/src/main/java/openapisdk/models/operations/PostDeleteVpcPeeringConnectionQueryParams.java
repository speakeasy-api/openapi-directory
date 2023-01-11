package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpcPeeringConnectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteVpcPeeringConnectionActionEnum action;
    public PostDeleteVpcPeeringConnectionQueryParams withAction(PostDeleteVpcPeeringConnectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteVpcPeeringConnectionVersionEnum version;
    public PostDeleteVpcPeeringConnectionQueryParams withVersion(PostDeleteVpcPeeringConnectionVersionEnum version) {
        this.version = version;
        return this;
    }
}