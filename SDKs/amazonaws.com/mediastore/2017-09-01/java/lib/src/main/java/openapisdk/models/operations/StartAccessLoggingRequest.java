package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartAccessLoggingRequest {
    public StartAccessLoggingHeaders headers;
    public StartAccessLoggingRequest withHeaders(StartAccessLoggingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartAccessLoggingInput request;
    public StartAccessLoggingRequest withRequest(openapisdk.models.shared.StartAccessLoggingInput request) {
        this.request = request;
        return this;
    }
}