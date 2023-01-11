package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifySubnetAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifySubnetAttributeActionEnum action;
    public PostModifySubnetAttributeQueryParams withAction(PostModifySubnetAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifySubnetAttributeVersionEnum version;
    public PostModifySubnetAttributeQueryParams withVersion(PostModifySubnetAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}