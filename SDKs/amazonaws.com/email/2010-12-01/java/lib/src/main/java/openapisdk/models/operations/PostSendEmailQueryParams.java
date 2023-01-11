package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendEmailQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSendEmailActionEnum action;
    public PostSendEmailQueryParams withAction(PostSendEmailActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSendEmailVersionEnum version;
    public PostSendEmailQueryParams withVersion(PostSendEmailVersionEnum version) {
        this.version = version;
        return this;
    }
}