package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TwipcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TwipcRequestBody request;
    public TwipcRequest withRequest(TwipcRequestBody request) {
        this.request = request;
        return this;
    }
    public TwipcSecurity security;
    public TwipcRequest withSecurity(TwipcSecurity security) {
        this.security = security;
        return this;
    }
}