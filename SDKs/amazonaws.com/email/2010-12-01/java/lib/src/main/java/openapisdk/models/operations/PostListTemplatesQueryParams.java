package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListTemplatesActionEnum action;
    public PostListTemplatesQueryParams withAction(PostListTemplatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListTemplatesVersionEnum version;
    public PostListTemplatesQueryParams withVersion(PostListTemplatesVersionEnum version) {
        this.version = version;
        return this;
    }
}