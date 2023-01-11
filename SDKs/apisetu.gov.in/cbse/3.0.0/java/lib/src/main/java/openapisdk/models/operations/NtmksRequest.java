package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NtmksRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NtmksRequestBody request;
    public NtmksRequest withRequest(NtmksRequestBody request) {
        this.request = request;
        return this;
    }
    public NtmksSecurity security;
    public NtmksRequest withSecurity(NtmksSecurity security) {
        this.security = security;
        return this;
    }
}