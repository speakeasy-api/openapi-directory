package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DpcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DpcerRequestBody request;
    public DpcerRequest withRequest(DpcerRequestBody request) {
        this.request = request;
        return this;
    }
    public DpcerSecurity security;
    public DpcerRequest withSecurity(DpcerSecurity security) {
        this.security = security;
        return this;
    }
}