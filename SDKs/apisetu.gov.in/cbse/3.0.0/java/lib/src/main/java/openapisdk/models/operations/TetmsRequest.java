package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TetmsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TetmsRequestBody request;
    public TetmsRequest withRequest(TetmsRequestBody request) {
        this.request = request;
        return this;
    }
    public TetmsSecurity security;
    public TetmsRequest withSecurity(TetmsSecurity security) {
        this.security = security;
        return this;
    }
}