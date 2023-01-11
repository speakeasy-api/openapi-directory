package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CyipcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CyipcRequestBody request;
    public CyipcRequest withRequest(CyipcRequestBody request) {
        this.request = request;
        return this;
    }
    public CyipcSecurity security;
    public CyipcRequest withSecurity(CyipcSecurity security) {
        this.security = security;
        return this;
    }
}