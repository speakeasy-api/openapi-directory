package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSuspendAccountHolderRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostSuspendAccountHolderRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostSuspendAccountHolderSecurity security;
    public PostSuspendAccountHolderRequest withSecurity(PostSuspendAccountHolderSecurity security) {
        this.security = security;
        return this;
    }
}