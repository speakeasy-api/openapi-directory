package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BackTestAnomalyDetectorRequest {
    public BackTestAnomalyDetectorHeaders headers;
    public BackTestAnomalyDetectorRequest withHeaders(BackTestAnomalyDetectorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BackTestAnomalyDetectorRequestBody request;
    public BackTestAnomalyDetectorRequest withRequest(BackTestAnomalyDetectorRequestBody request) {
        this.request = request;
        return this;
    }
}