package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UgdcnRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UgdcnRequestBody request;
    public UgdcnRequest withRequest(UgdcnRequestBody request) {
        this.request = request;
        return this;
    }
    public UgdcnSecurity security;
    public UgdcnRequest withSecurity(UgdcnSecurity security) {
        this.security = security;
        return this;
    }
}