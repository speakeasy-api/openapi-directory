package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CncerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CncerRequestBody request;
    public CncerRequest withRequest(CncerRequestBody request) {
        this.request = request;
        return this;
    }
    public CncerSecurity security;
    public CncerRequest withSecurity(CncerSecurity security) {
        this.security = security;
        return this;
    }
}