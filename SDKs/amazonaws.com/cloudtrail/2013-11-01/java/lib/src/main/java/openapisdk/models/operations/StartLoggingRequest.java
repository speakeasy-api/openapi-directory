package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartLoggingRequest {
    public StartLoggingHeaders headers;
    public StartLoggingRequest withHeaders(StartLoggingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartLoggingRequest request;
    public StartLoggingRequest withRequest(openapisdk.models.shared.StartLoggingRequest request) {
        this.request = request;
        return this;
    }
}