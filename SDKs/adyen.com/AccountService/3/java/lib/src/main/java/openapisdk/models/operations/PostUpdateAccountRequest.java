package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAccountRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostUpdateAccountRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostUpdateAccountSecurity security;
    public PostUpdateAccountRequest withSecurity(PostUpdateAccountSecurity security) {
        this.security = security;
        return this;
    }
}