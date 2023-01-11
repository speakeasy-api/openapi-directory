package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteShareholdersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostDeleteShareholdersRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostDeleteShareholdersSecurity security;
    public PostDeleteShareholdersRequest withSecurity(PostDeleteShareholdersSecurity security) {
        this.security = security;
        return this;
    }
}