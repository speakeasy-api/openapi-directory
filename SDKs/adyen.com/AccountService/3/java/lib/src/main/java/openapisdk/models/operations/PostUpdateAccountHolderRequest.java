package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAccountHolderRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostUpdateAccountHolderRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostUpdateAccountHolderSecurity security;
    public PostUpdateAccountHolderRequest withSecurity(PostUpdateAccountHolderSecurity security) {
        this.security = security;
        return this;
    }
}