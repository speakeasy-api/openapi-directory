package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlltrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AlltrRequestBody request;
    public AlltrRequest withRequest(AlltrRequestBody request) {
        this.request = request;
        return this;
    }
    public AlltrSecurity security;
    public AlltrRequest withSecurity(AlltrSecurity security) {
        this.security = security;
        return this;
    }
}