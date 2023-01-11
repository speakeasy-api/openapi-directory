package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CoprgRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CoprgRequestBody request;
    public CoprgRequest withRequest(CoprgRequestBody request) {
        this.request = request;
        return this;
    }
    public CoprgSecurity security;
    public CoprgRequest withSecurity(CoprgSecurity security) {
        this.security = security;
        return this;
    }
}