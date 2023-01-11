package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NstscRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NstscRequestBody request;
    public NstscRequest withRequest(NstscRequestBody request) {
        this.request = request;
        return this;
    }
    public NstscSecurity security;
    public NstscRequest withSecurity(NstscSecurity security) {
        this.security = security;
        return this;
    }
}