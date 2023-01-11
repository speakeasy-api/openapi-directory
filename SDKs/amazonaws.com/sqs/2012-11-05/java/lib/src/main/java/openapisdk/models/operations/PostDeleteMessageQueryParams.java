package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteMessageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteMessageActionEnum action;
    public PostDeleteMessageQueryParams withAction(PostDeleteMessageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteMessageVersionEnum version;
    public PostDeleteMessageQueryParams withVersion(PostDeleteMessageVersionEnum version) {
        this.version = version;
        return this;
    }
}