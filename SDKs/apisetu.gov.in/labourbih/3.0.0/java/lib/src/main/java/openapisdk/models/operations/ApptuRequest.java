package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApptuRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ApptuRequestBody request;
    public ApptuRequest withRequest(ApptuRequestBody request) {
        this.request = request;
        return this;
    }
    public ApptuSecurity security;
    public ApptuRequest withSecurity(ApptuSecurity security) {
        this.security = security;
        return this;
    }
}