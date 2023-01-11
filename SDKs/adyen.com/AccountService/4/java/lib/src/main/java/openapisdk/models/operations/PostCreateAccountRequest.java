package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAccountRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostCreateAccountRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostCreateAccountSecurity security;
    public PostCreateAccountRequest withSecurity(PostCreateAccountSecurity security) {
        this.security = security;
        return this;
    }
}