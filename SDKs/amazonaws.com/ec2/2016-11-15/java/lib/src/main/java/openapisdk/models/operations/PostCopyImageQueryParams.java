package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCopyImageActionEnum action;
    public PostCopyImageQueryParams withAction(PostCopyImageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCopyImageVersionEnum version;
    public PostCopyImageQueryParams withVersion(PostCopyImageVersionEnum version) {
        this.version = version;
        return this;
    }
}