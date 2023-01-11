package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BknocRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BknocRequestBody request;
    public BknocRequest withRequest(BknocRequestBody request) {
        this.request = request;
        return this;
    }
    public BknocSecurity security;
    public BknocRequest withSecurity(BknocSecurity security) {
        this.security = security;
        return this;
    }
}