package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTextDetectionRequest {
    public StartTextDetectionHeaders headers;
    public StartTextDetectionRequest withHeaders(StartTextDetectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartTextDetectionRequest request;
    public StartTextDetectionRequest withRequest(openapisdk.models.shared.StartTextDetectionRequest request) {
        this.request = request;
        return this;
    }
}