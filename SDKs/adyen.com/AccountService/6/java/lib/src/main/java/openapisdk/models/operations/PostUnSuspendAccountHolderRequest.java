package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUnSuspendAccountHolderRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostUnSuspendAccountHolderRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostUnSuspendAccountHolderSecurity security;
    public PostUnSuspendAccountHolderRequest withSecurity(PostUnSuspendAccountHolderSecurity security) {
        this.security = security;
        return this;
    }
}