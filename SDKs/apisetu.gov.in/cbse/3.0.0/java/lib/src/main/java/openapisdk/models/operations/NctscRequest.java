package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NctscRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NctscRequestBody request;
    public NctscRequest withRequest(NctscRequestBody request) {
        this.request = request;
        return this;
    }
    public NctscSecurity security;
    public NctscRequest withSecurity(NctscSecurity security) {
        this.security = security;
        return this;
    }
}