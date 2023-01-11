package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountDetailsRequest {
    public PutAccountDetailsHeaders headers;
    public PutAccountDetailsRequest withHeaders(PutAccountDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutAccountDetailsRequestBody request;
    public PutAccountDetailsRequest withRequest(PutAccountDetailsRequestBody request) {
        this.request = request;
        return this;
    }
}