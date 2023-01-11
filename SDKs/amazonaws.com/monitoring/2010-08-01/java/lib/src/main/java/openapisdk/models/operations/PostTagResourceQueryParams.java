package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTagResourceActionEnum action;
    public PostTagResourceQueryParams withAction(PostTagResourceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTagResourceVersionEnum version;
    public PostTagResourceQueryParams withVersion(PostTagResourceVersionEnum version) {
        this.version = version;
        return this;
    }
}