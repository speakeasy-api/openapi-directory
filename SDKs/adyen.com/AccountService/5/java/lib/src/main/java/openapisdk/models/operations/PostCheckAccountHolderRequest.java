package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCheckAccountHolderRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostCheckAccountHolderRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostCheckAccountHolderSecurity security;
    public PostCheckAccountHolderRequest withSecurity(PostCheckAccountHolderSecurity security) {
        this.security = security;
        return this;
    }
}