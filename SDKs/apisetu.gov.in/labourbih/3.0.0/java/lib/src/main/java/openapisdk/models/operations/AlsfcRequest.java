package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlsfcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AlsfcRequestBody request;
    public AlsfcRequest withRequest(AlsfcRequestBody request) {
        this.request = request;
        return this;
    }
    public AlsfcSecurity security;
    public AlsfcRequest withSecurity(AlsfcSecurity security) {
        this.security = security;
        return this;
    }
}