package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TapcnRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TapcnRequestBody request;
    public TapcnRequest withRequest(TapcnRequestBody request) {
        this.request = request;
        return this;
    }
    public TapcnSecurity security;
    public TapcnRequest withSecurity(TapcnSecurity security) {
        this.security = security;
        return this;
    }
}