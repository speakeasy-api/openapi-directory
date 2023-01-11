package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RpcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RpcerRequestBody request;
    public RpcerRequest withRequest(RpcerRequestBody request) {
        this.request = request;
        return this;
    }
    public RpcerSecurity security;
    public RpcerRequest withSecurity(RpcerSecurity security) {
        this.security = security;
        return this;
    }
}