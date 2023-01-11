package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivateAnomalyDetectorRequest {
    public ActivateAnomalyDetectorHeaders headers;
    public ActivateAnomalyDetectorRequest withHeaders(ActivateAnomalyDetectorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActivateAnomalyDetectorRequestBody request;
    public ActivateAnomalyDetectorRequest withRequest(ActivateAnomalyDetectorRequestBody request) {
        this.request = request;
        return this;
    }
}