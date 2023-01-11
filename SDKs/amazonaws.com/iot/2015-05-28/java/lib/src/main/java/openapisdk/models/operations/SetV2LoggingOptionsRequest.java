package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetV2LoggingOptionsRequest {
    public SetV2LoggingOptionsHeaders headers;
    public SetV2LoggingOptionsRequest withHeaders(SetV2LoggingOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetV2LoggingOptionsRequestBody request;
    public SetV2LoggingOptionsRequest withRequest(SetV2LoggingOptionsRequestBody request) {
        this.request = request;
        return this;
    }
}