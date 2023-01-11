package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PalcsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PalcsRequestBody request;
    public PalcsRequest withRequest(PalcsRequestBody request) {
        this.request = request;
        return this;
    }
    public PalcsSecurity security;
    public PalcsRequest withSecurity(PalcsSecurity security) {
        this.security = security;
        return this;
    }
}