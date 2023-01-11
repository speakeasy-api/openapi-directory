package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrvlcRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DrvlcRequestBody request;
    public DrvlcRequest withRequest(DrvlcRequestBody request) {
        this.request = request;
        return this;
    }
    public DrvlcSecurity security;
    public DrvlcRequest withSecurity(DrvlcSecurity security) {
        this.security = security;
        return this;
    }
}