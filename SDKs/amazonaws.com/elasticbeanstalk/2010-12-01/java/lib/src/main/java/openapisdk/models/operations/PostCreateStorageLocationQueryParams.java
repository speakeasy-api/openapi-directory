package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateStorageLocationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateStorageLocationActionEnum action;
    public PostCreateStorageLocationQueryParams withAction(PostCreateStorageLocationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateStorageLocationVersionEnum version;
    public PostCreateStorageLocationQueryParams withVersion(PostCreateStorageLocationVersionEnum version) {
        this.version = version;
        return this;
    }
}