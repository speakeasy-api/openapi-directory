package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountHoldersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostAccountHoldersRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostAccountHoldersSecurity security;
    public PostAccountHoldersRequest withSecurity(PostAccountHoldersSecurity security) {
        this.security = security;
        return this;
    }
}