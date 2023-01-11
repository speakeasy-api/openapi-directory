package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartFaceDetectionRequest {
    public StartFaceDetectionHeaders headers;
    public StartFaceDetectionRequest withHeaders(StartFaceDetectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartFaceDetectionRequest request;
    public StartFaceDetectionRequest withRequest(openapisdk.models.shared.StartFaceDetectionRequest request) {
        this.request = request;
        return this;
    }
}