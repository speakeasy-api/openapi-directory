package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartExperimentRequest {
    public StartExperimentHeaders headers;
    public StartExperimentRequest withHeaders(StartExperimentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartExperimentRequestBody request;
    public StartExperimentRequest withRequest(StartExperimentRequestBody request) {
        this.request = request;
        return this;
    }
}