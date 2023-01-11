package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NtcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NtcerRequestBody request;
    public NtcerRequest withRequest(NtcerRequestBody request) {
        this.request = request;
        return this;
    }
    public NtcerSecurity security;
    public NtcerRequest withSecurity(NtcerSecurity security) {
        this.security = security;
        return this;
    }
}