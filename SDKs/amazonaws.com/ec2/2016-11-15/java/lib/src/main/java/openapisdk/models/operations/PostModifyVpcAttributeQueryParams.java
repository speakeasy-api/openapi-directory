package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVpcAttributeActionEnum action;
    public PostModifyVpcAttributeQueryParams withAction(PostModifyVpcAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVpcAttributeVersionEnum version;
    public PostModifyVpcAttributeQueryParams withVersion(PostModifyVpcAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}