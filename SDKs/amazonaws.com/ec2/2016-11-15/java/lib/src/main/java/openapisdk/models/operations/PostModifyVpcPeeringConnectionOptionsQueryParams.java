package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcPeeringConnectionOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVpcPeeringConnectionOptionsActionEnum action;
    public PostModifyVpcPeeringConnectionOptionsQueryParams withAction(PostModifyVpcPeeringConnectionOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVpcPeeringConnectionOptionsVersionEnum version;
    public PostModifyVpcPeeringConnectionOptionsQueryParams withVersion(PostModifyVpcPeeringConnectionOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}