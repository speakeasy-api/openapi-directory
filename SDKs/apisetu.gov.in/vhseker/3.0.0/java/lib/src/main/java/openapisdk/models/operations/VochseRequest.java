package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VochseRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public VochseRequestBody request;
    public VochseRequest withRequest(VochseRequestBody request) {
        this.request = request;
        return this;
    }
    public VochseSecurity security;
    public VochseRequest withSecurity(VochseSecurity security) {
        this.security = security;
        return this;
    }
}