package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAccountHolderRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostCreateAccountHolderRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostCreateAccountHolderSecurity security;
    public PostCreateAccountHolderRequest withSecurity(PostCreateAccountHolderSecurity security) {
        this.security = security;
        return this;
    }
}