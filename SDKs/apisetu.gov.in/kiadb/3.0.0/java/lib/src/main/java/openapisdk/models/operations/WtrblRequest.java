package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WtrblRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public WtrblRequestBody request;
    public WtrblRequest withRequest(WtrblRequestBody request) {
        this.request = request;
        return this;
    }
    public WtrblSecurity security;
    public WtrblRequest withSecurity(WtrblSecurity security) {
        this.security = security;
        return this;
    }
}