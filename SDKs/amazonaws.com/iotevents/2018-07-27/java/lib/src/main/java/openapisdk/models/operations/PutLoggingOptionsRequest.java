package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLoggingOptionsRequest {
    public PutLoggingOptionsHeaders headers;
    public PutLoggingOptionsRequest withHeaders(PutLoggingOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutLoggingOptionsRequestBody request;
    public PutLoggingOptionsRequest withRequest(PutLoggingOptionsRequestBody request) {
        this.request = request;
        return this;
    }
}