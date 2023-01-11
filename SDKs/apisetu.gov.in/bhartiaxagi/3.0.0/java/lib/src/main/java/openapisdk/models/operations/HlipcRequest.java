package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HlipcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public HlipcRequestBody request;
    public HlipcRequest withRequest(HlipcRequestBody request) {
        this.request = request;
        return this;
    }
    public HlipcSecurity security;
    public HlipcRequest withSecurity(HlipcSecurity security) {
        this.security = security;
        return this;
    }
}