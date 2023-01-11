package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IticrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IticrRequestBody request;
    public IticrRequest withRequest(IticrRequestBody request) {
        this.request = request;
        return this;
    }
    public IticrSecurity security;
    public IticrRequest withSecurity(IticrSecurity security) {
        this.security = security;
        return this;
    }
}