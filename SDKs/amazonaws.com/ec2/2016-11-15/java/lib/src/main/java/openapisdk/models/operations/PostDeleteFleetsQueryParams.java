package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteFleetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteFleetsActionEnum action;
    public PostDeleteFleetsQueryParams withAction(PostDeleteFleetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteFleetsVersionEnum version;
    public PostDeleteFleetsQueryParams withVersion(PostDeleteFleetsVersionEnum version) {
        this.version = version;
        return this;
    }
}