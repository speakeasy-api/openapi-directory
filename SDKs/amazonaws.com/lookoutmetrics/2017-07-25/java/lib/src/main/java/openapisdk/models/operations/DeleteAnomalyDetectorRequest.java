package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAnomalyDetectorRequest {
    public DeleteAnomalyDetectorHeaders headers;
    public DeleteAnomalyDetectorRequest withHeaders(DeleteAnomalyDetectorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteAnomalyDetectorRequestBody request;
    public DeleteAnomalyDetectorRequest withRequest(DeleteAnomalyDetectorRequestBody request) {
        this.request = request;
        return this;
    }
}