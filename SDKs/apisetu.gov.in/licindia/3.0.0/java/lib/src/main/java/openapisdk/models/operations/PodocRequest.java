package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PodocRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PodocRequestBody request;
    public PodocRequest withRequest(PodocRequestBody request) {
        this.request = request;
        return this;
    }
    public PodocSecurity security;
    public PodocRequest withSecurity(PodocSecurity security) {
        this.security = security;
        return this;
    }
}