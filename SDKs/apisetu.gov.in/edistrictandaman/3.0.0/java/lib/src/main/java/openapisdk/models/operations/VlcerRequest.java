package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VlcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public VlcerRequestBody request;
    public VlcerRequest withRequest(VlcerRequestBody request) {
        this.request = request;
        return this;
    }
    public VlcerSecurity security;
    public VlcerRequest withSecurity(VlcerSecurity security) {
        this.security = security;
        return this;
    }
}