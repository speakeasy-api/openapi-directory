package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CvipcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CvipcRequestBody request;
    public CvipcRequest withRequest(CvipcRequestBody request) {
        this.request = request;
        return this;
    }
    public CvipcSecurity security;
    public CvipcRequest withSecurity(CvipcSecurity security) {
        this.security = security;
        return this;
    }
}