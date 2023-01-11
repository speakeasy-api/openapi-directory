package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemUsagesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public GetItemUsagesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public GetItemUsagesSecurity security;
    public GetItemUsagesRequest withSecurity(GetItemUsagesSecurity security) {
        this.security = security;
        return this;
    }
}