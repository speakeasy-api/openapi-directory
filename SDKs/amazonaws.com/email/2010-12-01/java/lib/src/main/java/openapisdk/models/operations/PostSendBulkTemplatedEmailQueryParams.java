package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendBulkTemplatedEmailQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSendBulkTemplatedEmailActionEnum action;
    public PostSendBulkTemplatedEmailQueryParams withAction(PostSendBulkTemplatedEmailActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSendBulkTemplatedEmailVersionEnum version;
    public PostSendBulkTemplatedEmailQueryParams withVersion(PostSendBulkTemplatedEmailVersionEnum version) {
        this.version = version;
        return this;
    }
}