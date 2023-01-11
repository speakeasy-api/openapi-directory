package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DipcrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DipcrRequestBody request;
    public DipcrRequest withRequest(DipcrRequestBody request) {
        this.request = request;
        return this;
    }
    public DipcrSecurity security;
    public DipcrRequest withSecurity(DipcrSecurity security) {
        this.security = security;
        return this;
    }
}