package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopAccessLoggingRequest {
    public StopAccessLoggingHeaders headers;
    public StopAccessLoggingRequest withHeaders(StopAccessLoggingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopAccessLoggingInput request;
    public StopAccessLoggingRequest withRequest(openapisdk.models.shared.StopAccessLoggingInput request) {
        this.request = request;
        return this;
    }
}