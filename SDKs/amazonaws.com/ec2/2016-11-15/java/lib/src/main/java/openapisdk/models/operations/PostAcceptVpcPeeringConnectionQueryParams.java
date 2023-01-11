package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptVpcPeeringConnectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAcceptVpcPeeringConnectionActionEnum action;
    public PostAcceptVpcPeeringConnectionQueryParams withAction(PostAcceptVpcPeeringConnectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAcceptVpcPeeringConnectionVersionEnum version;
    public PostAcceptVpcPeeringConnectionQueryParams withVersion(PostAcceptVpcPeeringConnectionVersionEnum version) {
        this.version = version;
        return this;
    }
}