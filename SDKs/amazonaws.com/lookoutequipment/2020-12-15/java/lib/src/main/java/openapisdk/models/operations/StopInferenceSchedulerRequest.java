package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopInferenceSchedulerRequest {
    public StopInferenceSchedulerHeaders headers;
    public StopInferenceSchedulerRequest withHeaders(StopInferenceSchedulerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopInferenceSchedulerRequest request;
    public StopInferenceSchedulerRequest withRequest(openapisdk.models.shared.StopInferenceSchedulerRequest request) {
        this.request = request;
        return this;
    }
}