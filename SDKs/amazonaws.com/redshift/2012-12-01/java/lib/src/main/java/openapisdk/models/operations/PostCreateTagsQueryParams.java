package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTagsActionEnum action;
    public PostCreateTagsQueryParams withAction(PostCreateTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTagsVersionEnum version;
    public PostCreateTagsQueryParams withVersion(PostCreateTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}