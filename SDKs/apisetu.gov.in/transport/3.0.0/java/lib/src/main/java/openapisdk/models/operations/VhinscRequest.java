package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VhinscRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public VhinscRequestBody request;
    public VhinscRequest withRequest(VhinscRequestBody request) {
        this.request = request;
        return this;
    }
    public VhinscSecurity security;
    public VhinscRequest withSecurity(VhinscSecurity security) {
        this.security = security;
        return this;
    }
}