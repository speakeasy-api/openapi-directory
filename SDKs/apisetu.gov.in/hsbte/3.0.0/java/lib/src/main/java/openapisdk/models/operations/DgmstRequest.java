package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DgmstRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DgmstRequestBody request;
    public DgmstRequest withRequest(DgmstRequestBody request) {
        this.request = request;
        return this;
    }
    public DgmstSecurity security;
    public DgmstRequest withSecurity(DgmstSecurity security) {
        this.security = security;
        return this;
    }
}