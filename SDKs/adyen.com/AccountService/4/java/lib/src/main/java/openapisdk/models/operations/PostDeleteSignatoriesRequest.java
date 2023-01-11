package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSignatoriesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostDeleteSignatoriesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostDeleteSignatoriesSecurity security;
    public PostDeleteSignatoriesRequest withSecurity(PostDeleteSignatoriesSecurity security) {
        this.security = security;
        return this;
    }
}