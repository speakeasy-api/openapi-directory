package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopEntitiesDetectionV2JobRequest {
    public StopEntitiesDetectionV2JobHeaders headers;
    public StopEntitiesDetectionV2JobRequest withHeaders(StopEntitiesDetectionV2JobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopEntitiesDetectionV2JobRequest request;
    public StopEntitiesDetectionV2JobRequest withRequest(openapisdk.models.shared.StopEntitiesDetectionV2JobRequest request) {
        this.request = request;
        return this;
    }
}