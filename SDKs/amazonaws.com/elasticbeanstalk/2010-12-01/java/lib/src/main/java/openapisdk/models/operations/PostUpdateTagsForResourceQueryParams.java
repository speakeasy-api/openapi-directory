package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateTagsForResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateTagsForResourceActionEnum action;
    public PostUpdateTagsForResourceQueryParams withAction(PostUpdateTagsForResourceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateTagsForResourceVersionEnum version;
    public PostUpdateTagsForResourceQueryParams withVersion(PostUpdateTagsForResourceVersionEnum version) {
        this.version = version;
        return this;
    }
}