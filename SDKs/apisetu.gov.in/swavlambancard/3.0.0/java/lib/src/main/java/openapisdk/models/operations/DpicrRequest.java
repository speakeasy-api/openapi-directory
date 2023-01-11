package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DpicrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DpicrRequestBody request;
    public DpicrRequest withRequest(DpicrRequestBody request) {
        this.request = request;
        return this;
    }
    public DpicrSecurity security;
    public DpicrRequest withSecurity(DpicrSecurity security) {
        this.security = security;
        return this;
    }
}