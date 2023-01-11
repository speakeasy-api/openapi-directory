package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NsescRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NsescRequestBody request;
    public NsescRequest withRequest(NsescRequestBody request) {
        this.request = request;
        return this;
    }
    public NsescSecurity security;
    public NsescRequest withSecurity(NsescSecurity security) {
        this.security = security;
        return this;
    }
}