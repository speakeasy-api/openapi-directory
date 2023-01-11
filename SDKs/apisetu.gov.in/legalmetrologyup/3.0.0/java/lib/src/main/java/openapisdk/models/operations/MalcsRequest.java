package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MalcsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MalcsRequestBody request;
    public MalcsRequest withRequest(MalcsRequestBody request) {
        this.request = request;
        return this;
    }
    public MalcsSecurity security;
    public MalcsRequest withSecurity(MalcsSecurity security) {
        this.security = security;
        return this;
    }
}