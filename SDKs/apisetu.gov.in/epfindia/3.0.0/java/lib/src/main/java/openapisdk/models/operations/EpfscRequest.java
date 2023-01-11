package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EpfscRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EpfscRequestBody request;
    public EpfscRequest withRequest(EpfscRequestBody request) {
        this.request = request;
        return this;
    }
    public EpfscSecurity security;
    public EpfscRequest withSecurity(EpfscSecurity security) {
        this.security = security;
        return this;
    }
}