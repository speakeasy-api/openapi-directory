package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CvcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CvcerRequestBody request;
    public CvcerRequest withRequest(CvcerRequestBody request) {
        this.request = request;
        return this;
    }
    public CvcerSecurity security;
    public CvcerRequest withSecurity(CvcerSecurity security) {
        this.security = security;
        return this;
    }
}