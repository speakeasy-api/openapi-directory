package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectVpcPeeringConnectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRejectVpcPeeringConnectionActionEnum action;
    public PostRejectVpcPeeringConnectionQueryParams withAction(PostRejectVpcPeeringConnectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRejectVpcPeeringConnectionVersionEnum version;
    public PostRejectVpcPeeringConnectionQueryParams withVersion(PostRejectVpcPeeringConnectionVersionEnum version) {
        this.version = version;
        return this;
    }
}