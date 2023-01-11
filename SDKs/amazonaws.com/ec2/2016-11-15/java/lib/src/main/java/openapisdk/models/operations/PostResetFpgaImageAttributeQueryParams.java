package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetFpgaImageAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResetFpgaImageAttributeActionEnum action;
    public PostResetFpgaImageAttributeQueryParams withAction(PostResetFpgaImageAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResetFpgaImageAttributeVersionEnum version;
    public PostResetFpgaImageAttributeQueryParams withVersion(PostResetFpgaImageAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}