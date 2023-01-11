package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MrcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MrcerRequestBody request;
    public MrcerRequest withRequest(MrcerRequestBody request) {
        this.request = request;
        return this;
    }
    public MrcerSecurity security;
    public MrcerRequest withSecurity(MrcerSecurity security) {
        this.security = security;
        return this;
    }
}