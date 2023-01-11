package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabrpRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LabrpRequestBody request;
    public LabrpRequest withRequest(LabrpRequestBody request) {
        this.request = request;
        return this;
    }
    public LabrpSecurity security;
    public LabrpRequest withSecurity(LabrpSecurity security) {
        this.security = security;
        return this;
    }
}