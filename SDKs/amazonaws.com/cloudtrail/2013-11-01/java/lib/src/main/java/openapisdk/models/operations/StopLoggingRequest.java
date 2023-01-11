package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopLoggingRequest {
    public StopLoggingHeaders headers;
    public StopLoggingRequest withHeaders(StopLoggingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopLoggingRequest request;
    public StopLoggingRequest withRequest(openapisdk.models.shared.StopLoggingRequest request) {
        this.request = request;
        return this;
    }
}