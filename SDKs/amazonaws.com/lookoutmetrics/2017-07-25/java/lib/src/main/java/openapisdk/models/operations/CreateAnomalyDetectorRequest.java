package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAnomalyDetectorRequest {
    public CreateAnomalyDetectorHeaders headers;
    public CreateAnomalyDetectorRequest withHeaders(CreateAnomalyDetectorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAnomalyDetectorRequestBody request;
    public CreateAnomalyDetectorRequest withRequest(CreateAnomalyDetectorRequestBody request) {
        this.request = request;
        return this;
    }
}