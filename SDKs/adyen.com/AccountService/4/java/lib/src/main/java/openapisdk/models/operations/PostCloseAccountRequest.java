package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCloseAccountRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostCloseAccountRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostCloseAccountSecurity security;
    public PostCloseAccountRequest withSecurity(PostCloseAccountSecurity security) {
        this.security = security;
        return this;
    }
}