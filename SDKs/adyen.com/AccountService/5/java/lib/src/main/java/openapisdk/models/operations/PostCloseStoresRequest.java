package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCloseStoresRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostCloseStoresRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostCloseStoresSecurity security;
    public PostCloseStoresRequest withSecurity(PostCloseStoresSecurity security) {
        this.security = security;
        return this;
    }
}