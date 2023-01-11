package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MutanRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MutanRequestBody request;
    public MutanRequest withRequest(MutanRequestBody request) {
        this.request = request;
        return this;
    }
    public MutanSecurity security;
    public MutanRequest withSecurity(MutanSecurity security) {
        this.security = security;
        return this;
    }
}