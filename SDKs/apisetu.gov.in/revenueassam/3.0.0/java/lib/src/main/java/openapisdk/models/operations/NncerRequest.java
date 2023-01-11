package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NncerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NncerRequestBody request;
    public NncerRequest withRequest(NncerRequestBody request) {
        this.request = request;
        return this;
    }
    public NncerSecurity security;
    public NncerRequest withSecurity(NncerSecurity security) {
        this.security = security;
        return this;
    }
}