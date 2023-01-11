package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CfmstRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CfmstRequestBody request;
    public CfmstRequest withRequest(CfmstRequestBody request) {
        this.request = request;
        return this;
    }
    public CfmstSecurity security;
    public CfmstRequest withSecurity(CfmstSecurity security) {
        this.security = security;
        return this;
    }
}