package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAccountHolderRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostGetAccountHolderRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostGetAccountHolderSecurity security;
    public PostGetAccountHolderRequest withSecurity(PostGetAccountHolderSecurity security) {
        this.security = security;
        return this;
    }
}