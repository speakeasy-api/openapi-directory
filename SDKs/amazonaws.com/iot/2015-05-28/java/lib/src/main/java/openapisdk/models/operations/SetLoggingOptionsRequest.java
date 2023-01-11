package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetLoggingOptionsRequest {
    public SetLoggingOptionsHeaders headers;
    public SetLoggingOptionsRequest withHeaders(SetLoggingOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetLoggingOptionsRequestBody request;
    public SetLoggingOptionsRequest withRequest(SetLoggingOptionsRequestBody request) {
        this.request = request;
        return this;
    }
}