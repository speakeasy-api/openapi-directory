package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AreaRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AreaRequestBody request;
    public AreaRequest withRequest(AreaRequestBody request) {
        this.request = request;
        return this;
    }
    public AreaSecurity security;
    public AreaRequest withSecurity(AreaSecurity security) {
        this.security = security;
        return this;
    }
}