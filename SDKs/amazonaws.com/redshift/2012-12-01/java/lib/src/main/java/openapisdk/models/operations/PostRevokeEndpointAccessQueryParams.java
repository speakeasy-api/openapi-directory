package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeEndpointAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRevokeEndpointAccessActionEnum action;
    public PostRevokeEndpointAccessQueryParams withAction(PostRevokeEndpointAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRevokeEndpointAccessVersionEnum version;
    public PostRevokeEndpointAccessQueryParams withVersion(PostRevokeEndpointAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}