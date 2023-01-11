package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReceiveMessageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostReceiveMessageActionEnum action;
    public PostReceiveMessageQueryParams withAction(PostReceiveMessageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostReceiveMessageVersionEnum version;
    public PostReceiveMessageQueryParams withVersion(PostReceiveMessageVersionEnum version) {
        this.version = version;
        return this;
    }
}