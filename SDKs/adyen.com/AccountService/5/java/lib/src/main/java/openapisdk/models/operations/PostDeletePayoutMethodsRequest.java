package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeletePayoutMethodsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostDeletePayoutMethodsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostDeletePayoutMethodsSecurity security;
    public PostDeletePayoutMethodsRequest withSecurity(PostDeletePayoutMethodsSecurity security) {
        this.security = security;
        return this;
    }
}