package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CfltrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CfltrRequestBody request;
    public CfltrRequest withRequest(CfltrRequestBody request) {
        this.request = request;
        return this;
    }
    public CfltrSecurity security;
    public CfltrRequest withSecurity(CfltrSecurity security) {
        this.security = security;
        return this;
    }
}