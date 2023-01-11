package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSegmentDetectionRequest {
    public StartSegmentDetectionHeaders headers;
    public StartSegmentDetectionRequest withHeaders(StartSegmentDetectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartSegmentDetectionRequest request;
    public StartSegmentDetectionRequest withRequest(openapisdk.models.shared.StartSegmentDetectionRequest request) {
        this.request = request;
        return this;
    }
}