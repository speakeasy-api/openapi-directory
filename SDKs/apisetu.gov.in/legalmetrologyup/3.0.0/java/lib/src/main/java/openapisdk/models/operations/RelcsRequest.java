package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RelcsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RelcsRequestBody request;
    public RelcsRequest withRequest(RelcsRequestBody request) {
        this.request = request;
        return this;
    }
    public RelcsSecurity security;
    public RelcsRequest withSecurity(RelcsSecurity security) {
        this.security = security;
        return this;
    }
}