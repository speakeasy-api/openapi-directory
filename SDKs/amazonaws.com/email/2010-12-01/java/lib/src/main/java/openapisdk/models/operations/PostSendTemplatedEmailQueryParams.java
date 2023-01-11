package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendTemplatedEmailQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSendTemplatedEmailActionEnum action;
    public PostSendTemplatedEmailQueryParams withAction(PostSendTemplatedEmailActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSendTemplatedEmailVersionEnum version;
    public PostSendTemplatedEmailQueryParams withVersion(PostSendTemplatedEmailVersionEnum version) {
        this.version = version;
        return this;
    }
}