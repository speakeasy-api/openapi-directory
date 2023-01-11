package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TripcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TripcRequestBody request;
    public TripcRequest withRequest(TripcRequestBody request) {
        this.request = request;
        return this;
    }
    public TripcSecurity security;
    public TripcRequest withSecurity(TripcSecurity security) {
        this.security = security;
        return this;
    }
}