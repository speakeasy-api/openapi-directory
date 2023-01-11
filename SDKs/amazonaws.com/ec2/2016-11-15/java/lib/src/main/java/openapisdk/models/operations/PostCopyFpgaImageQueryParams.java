package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyFpgaImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCopyFpgaImageActionEnum action;
    public PostCopyFpgaImageQueryParams withAction(PostCopyFpgaImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCopyFpgaImageVersionEnum version;
    public PostCopyFpgaImageQueryParams withVersion(PostCopyFpgaImageVersionEnum version) {
        this.version = version;
        return this;
    }
}