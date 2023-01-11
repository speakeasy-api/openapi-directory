package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MripcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MripcRequestBody request;
    public MripcRequest withRequest(MripcRequestBody request) {
        this.request = request;
        return this;
    }
    public MripcSecurity security;
    public MripcRequest withSecurity(MripcSecurity security) {
        this.security = security;
        return this;
    }
}