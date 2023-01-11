package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeEndpointAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAuthorizeEndpointAccessActionEnum action;
    public PostAuthorizeEndpointAccessQueryParams withAction(PostAuthorizeEndpointAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAuthorizeEndpointAccessVersionEnum version;
    public PostAuthorizeEndpointAccessQueryParams withVersion(PostAuthorizeEndpointAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}