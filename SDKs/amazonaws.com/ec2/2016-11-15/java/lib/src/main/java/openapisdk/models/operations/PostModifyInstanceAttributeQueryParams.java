package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstanceAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyInstanceAttributeActionEnum action;
    public PostModifyInstanceAttributeQueryParams withAction(PostModifyInstanceAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyInstanceAttributeVersionEnum version;
    public PostModifyInstanceAttributeQueryParams withVersion(PostModifyInstanceAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}