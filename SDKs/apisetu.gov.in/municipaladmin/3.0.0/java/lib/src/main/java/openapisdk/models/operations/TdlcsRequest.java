package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TdlcsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TdlcsRequestBody request;
    public TdlcsRequest withRequest(TdlcsRequestBody request) {
        this.request = request;
        return this;
    }
    public TdlcsSecurity security;
    public TdlcsRequest withSecurity(TdlcsSecurity security) {
        this.security = security;
        return this;
    }
}