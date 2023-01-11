package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HvcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public HvcerRequestBody request;
    public HvcerRequest withRequest(HvcerRequestBody request) {
        this.request = request;
        return this;
    }
    public HvcerSecurity security;
    public HvcerRequest withSecurity(HvcerSecurity security) {
        this.security = security;
        return this;
    }
}