package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PancrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PancrRequestBody request;
    public PancrRequest withRequest(PancrRequestBody request) {
        this.request = request;
        return this;
    }
    public PancrSecurity security;
    public PancrRequest withSecurity(PancrSecurity security) {
        this.security = security;
        return this;
    }
}