package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VrwmiRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public VrwmiRequestBody request;
    public VrwmiRequest withRequest(VrwmiRequestBody request) {
        this.request = request;
        return this;
    }
    public VrwmiSecurity security;
    public VrwmiRequest withSecurity(VrwmiSecurity security) {
        this.security = security;
        return this;
    }
}