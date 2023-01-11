package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateRestoreImageTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateRestoreImageTaskActionEnum action;
    public PostCreateRestoreImageTaskQueryParams withAction(PostCreateRestoreImageTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateRestoreImageTaskVersionEnum version;
    public PostCreateRestoreImageTaskQueryParams withVersion(PostCreateRestoreImageTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}