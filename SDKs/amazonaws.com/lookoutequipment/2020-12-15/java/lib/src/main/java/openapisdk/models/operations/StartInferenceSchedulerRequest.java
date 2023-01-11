package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartInferenceSchedulerRequest {
    public StartInferenceSchedulerHeaders headers;
    public StartInferenceSchedulerRequest withHeaders(StartInferenceSchedulerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartInferenceSchedulerRequest request;
    public StartInferenceSchedulerRequest withRequest(openapisdk.models.shared.StartInferenceSchedulerRequest request) {
        this.request = request;
        return this;
    }
}