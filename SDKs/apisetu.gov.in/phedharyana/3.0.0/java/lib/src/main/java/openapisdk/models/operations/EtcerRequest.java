package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EtcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EtcerRequestBody request;
    public EtcerRequest withRequest(EtcerRequestBody request) {
        this.request = request;
        return this;
    }
    public EtcerSecurity security;
    public EtcerRequest withSecurity(EtcerSecurity security) {
        this.security = security;
        return this;
    }
}