package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CripcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CripcRequestBody request;
    public CripcRequest withRequest(CripcRequestBody request) {
        this.request = request;
        return this;
    }
    public CripcSecurity security;
    public CripcRequest withSecurity(CripcSecurity security) {
        this.security = security;
        return this;
    }
}