package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TetcrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TetcrRequestBody request;
    public TetcrRequest withRequest(TetcrRequestBody request) {
        this.request = request;
        return this;
    }
    public TetcrSecurity security;
    public TetcrRequest withSecurity(TetcrSecurity security) {
        this.security = security;
        return this;
    }
}