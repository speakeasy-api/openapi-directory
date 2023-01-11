package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SsmgrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SsmgrRequestBody request;
    public SsmgrRequest withRequest(SsmgrRequestBody request) {
        this.request = request;
        return this;
    }
    public SsmgrSecurity security;
    public SsmgrRequest withSecurity(SsmgrSecurity security) {
        this.security = security;
        return this;
    }
}