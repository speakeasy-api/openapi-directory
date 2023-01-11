package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListTagsForResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListTagsForResourceActionEnum action;
    public PostListTagsForResourceQueryParams withAction(PostListTagsForResourceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListTagsForResourceVersionEnum version;
    public PostListTagsForResourceQueryParams withVersion(PostListTagsForResourceVersionEnum version) {
        this.version = version;
        return this;
    }
}