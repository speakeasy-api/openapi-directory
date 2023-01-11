package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAnomalyDetectorRequest {
    public UpdateAnomalyDetectorHeaders headers;
    public UpdateAnomalyDetectorRequest withHeaders(UpdateAnomalyDetectorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAnomalyDetectorRequestBody request;
    public UpdateAnomalyDetectorRequest withRequest(UpdateAnomalyDetectorRequestBody request) {
        this.request = request;
        return this;
    }
}