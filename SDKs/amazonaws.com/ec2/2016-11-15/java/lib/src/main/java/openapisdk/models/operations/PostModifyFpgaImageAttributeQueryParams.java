package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyFpgaImageAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyFpgaImageAttributeActionEnum action;
    public PostModifyFpgaImageAttributeQueryParams withAction(PostModifyFpgaImageAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyFpgaImageAttributeVersionEnum version;
    public PostModifyFpgaImageAttributeQueryParams withVersion(PostModifyFpgaImageAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}