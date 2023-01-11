package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAccountHolderStateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostUpdateAccountHolderStateRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostUpdateAccountHolderStateSecurity security;
    public PostUpdateAccountHolderStateRequest withSecurity(PostUpdateAccountHolderStateSecurity security) {
        this.security = security;
        return this;
    }
}