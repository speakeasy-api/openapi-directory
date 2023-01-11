package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateStoreImageTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateStoreImageTaskActionEnum action;
    public PostCreateStoreImageTaskQueryParams withAction(PostCreateStoreImageTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateStoreImageTaskVersionEnum version;
    public PostCreateStoreImageTaskQueryParams withVersion(PostCreateStoreImageTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}