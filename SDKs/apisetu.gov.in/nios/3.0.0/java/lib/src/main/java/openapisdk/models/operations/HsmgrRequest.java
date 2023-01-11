package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HsmgrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public HsmgrRequestBody request;
    public HsmgrRequest withRequest(HsmgrRequestBody request) {
        this.request = request;
        return this;
    }
    public HsmgrSecurity security;
    public HsmgrRequest withSecurity(HsmgrSecurity security) {
        this.security = security;
        return this;
    }
}