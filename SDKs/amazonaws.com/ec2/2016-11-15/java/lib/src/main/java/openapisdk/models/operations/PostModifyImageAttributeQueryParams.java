package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyImageAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyImageAttributeActionEnum action;
    public PostModifyImageAttributeQueryParams withAction(PostModifyImageAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyImageAttributeVersionEnum version;
    public PostModifyImageAttributeQueryParams withVersion(PostModifyImageAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}