package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PripcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PripcRequestBody request;
    public PripcRequest withRequest(PripcRequestBody request) {
        this.request = request;
        return this;
    }
    public PripcSecurity security;
    public PripcRequest withSecurity(PripcSecurity security) {
        this.security = security;
        return this;
    }
}