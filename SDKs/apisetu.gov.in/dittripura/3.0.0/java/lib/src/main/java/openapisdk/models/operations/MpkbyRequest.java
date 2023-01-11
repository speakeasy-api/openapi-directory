package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MpkbyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MpkbyRequestBody request;
    public MpkbyRequest withRequest(MpkbyRequestBody request) {
        this.request = request;
        return this;
    }
    public MpkbySecurity security;
    public MpkbyRequest withSecurity(MpkbySecurity security) {
        this.security = security;
        return this;
    }
}