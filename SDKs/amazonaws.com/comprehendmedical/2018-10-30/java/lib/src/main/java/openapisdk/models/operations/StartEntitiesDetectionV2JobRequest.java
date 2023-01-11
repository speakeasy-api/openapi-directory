package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartEntitiesDetectionV2JobRequest {
    public StartEntitiesDetectionV2JobHeaders headers;
    public StartEntitiesDetectionV2JobRequest withHeaders(StartEntitiesDetectionV2JobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartEntitiesDetectionV2JobRequest request;
    public StartEntitiesDetectionV2JobRequest withRequest(openapisdk.models.shared.StartEntitiesDetectionV2JobRequest request) {
        this.request = request;
        return this;
    }
}