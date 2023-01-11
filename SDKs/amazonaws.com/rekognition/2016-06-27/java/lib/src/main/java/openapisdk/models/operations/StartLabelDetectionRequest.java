package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartLabelDetectionRequest {
    public StartLabelDetectionHeaders headers;
    public StartLabelDetectionRequest withHeaders(StartLabelDetectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartLabelDetectionRequest request;
    public StartLabelDetectionRequest withRequest(openapisdk.models.shared.StartLabelDetectionRequest request) {
        this.request = request;
        return this;
    }
}