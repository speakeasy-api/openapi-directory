package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArcmwRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ArcmwRequestBody request;
    public ArcmwRequest withRequest(ArcmwRequestBody request) {
        this.request = request;
        return this;
    }
    public ArcmwSecurity security;
    public ArcmwRequest withSecurity(ArcmwSecurity security) {
        this.security = security;
        return this;
    }
}