package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddTagsToResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAddTagsToResourceActionEnum action;
    public PostAddTagsToResourceQueryParams withAction(PostAddTagsToResourceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAddTagsToResourceVersionEnum version;
    public PostAddTagsToResourceQueryParams withVersion(PostAddTagsToResourceVersionEnum version) {
        this.version = version;
        return this;
    }
}