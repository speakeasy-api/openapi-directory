package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpcPeeringConnectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateVpcPeeringConnectionActionEnum action;
    public PostCreateVpcPeeringConnectionQueryParams withAction(PostCreateVpcPeeringConnectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateVpcPeeringConnectionVersionEnum version;
    public PostCreateVpcPeeringConnectionQueryParams withVersion(PostCreateVpcPeeringConnectionVersionEnum version) {
        this.version = version;
        return this;
    }
}