package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRemoveTagsActionEnum action;
    public PostRemoveTagsQueryParams withAction(PostRemoveTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRemoveTagsVersionEnum version;
    public PostRemoveTagsQueryParams withVersion(PostRemoveTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}