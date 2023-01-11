package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDebitAccountHolderRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostDebitAccountHolderRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostDebitAccountHolderSecurity security;
    public PostDebitAccountHolderRequest withSecurity(PostDebitAccountHolderSecurity security) {
        this.security = security;
        return this;
    }
}