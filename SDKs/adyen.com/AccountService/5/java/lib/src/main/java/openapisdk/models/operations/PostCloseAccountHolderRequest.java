package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCloseAccountHolderRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostCloseAccountHolderRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostCloseAccountHolderSecurity security;
    public PostCloseAccountHolderRequest withSecurity(PostCloseAccountHolderSecurity security) {
        this.security = security;
        return this;
    }
}