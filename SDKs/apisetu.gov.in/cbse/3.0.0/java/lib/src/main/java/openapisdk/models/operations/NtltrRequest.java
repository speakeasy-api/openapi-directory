package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NtltrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NtltrRequestBody request;
    public NtltrRequest withRequest(NtltrRequestBody request) {
        this.request = request;
        return this;
    }
    public NtltrSecurity security;
    public NtltrRequest withSecurity(NtltrSecurity security) {
        this.security = security;
        return this;
    }
}