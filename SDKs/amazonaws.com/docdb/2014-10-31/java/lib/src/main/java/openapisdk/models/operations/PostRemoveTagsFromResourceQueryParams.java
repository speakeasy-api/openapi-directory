package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveTagsFromResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRemoveTagsFromResourceActionEnum action;
    public PostRemoveTagsFromResourceQueryParams withAction(PostRemoveTagsFromResourceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRemoveTagsFromResourceVersionEnum version;
    public PostRemoveTagsFromResourceQueryParams withVersion(PostRemoveTagsFromResourceVersionEnum version) {
        this.version = version;
        return this;
    }
}