package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EgipcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EgipcRequestBody request;
    public EgipcRequest withRequest(EgipcRequestBody request) {
        this.request = request;
        return this;
    }
    public EgipcSecurity security;
    public EgipcRequest withSecurity(EgipcSecurity security) {
        this.security = security;
        return this;
    }
}