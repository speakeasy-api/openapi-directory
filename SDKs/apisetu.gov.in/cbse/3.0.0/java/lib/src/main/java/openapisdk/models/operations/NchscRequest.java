package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NchscRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NchscRequestBody request;
    public NchscRequest withRequest(NchscRequestBody request) {
        this.request = request;
        return this;
    }
    public NchscSecurity security;
    public NchscRequest withSecurity(NchscSecurity security) {
        this.security = security;
        return this;
    }
}