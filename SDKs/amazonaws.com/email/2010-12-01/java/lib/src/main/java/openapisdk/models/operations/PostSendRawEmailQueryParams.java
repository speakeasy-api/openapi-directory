package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendRawEmailQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSendRawEmailActionEnum action;
    public PostSendRawEmailQueryParams withAction(PostSendRawEmailActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSendRawEmailVersionEnum version;
    public PostSendRawEmailQueryParams withVersion(PostSendRawEmailVersionEnum version) {
        this.version = version;
        return this;
    }
}