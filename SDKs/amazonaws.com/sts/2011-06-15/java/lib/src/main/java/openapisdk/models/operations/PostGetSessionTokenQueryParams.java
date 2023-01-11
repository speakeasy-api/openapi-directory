package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSessionTokenQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetSessionTokenActionEnum action;
    public PostGetSessionTokenQueryParams withAction(PostGetSessionTokenActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetSessionTokenVersionEnum version;
    public PostGetSessionTokenQueryParams withVersion(PostGetSessionTokenVersionEnum version) {
        this.version = version;
        return this;
    }
}