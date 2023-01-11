package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HmipcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public HmipcRequestBody request;
    public HmipcRequest withRequest(HmipcRequestBody request) {
        this.request = request;
        return this;
    }
    public HmipcSecurity security;
    public HmipcRequest withSecurity(HmipcSecurity security) {
        this.security = security;
        return this;
    }
}