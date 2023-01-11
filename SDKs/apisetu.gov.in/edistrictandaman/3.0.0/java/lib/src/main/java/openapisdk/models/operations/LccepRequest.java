package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LccepRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LccepRequestBody request;
    public LccepRequest withRequest(LccepRequestBody request) {
        this.request = request;
        return this;
    }
    public LccepSecurity security;
    public LccepRequest withSecurity(LccepSecurity security) {
        this.security = security;
        return this;
    }
}