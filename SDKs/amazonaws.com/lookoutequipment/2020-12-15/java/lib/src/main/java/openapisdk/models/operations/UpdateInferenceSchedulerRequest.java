package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInferenceSchedulerRequest {
    public UpdateInferenceSchedulerHeaders headers;
    public UpdateInferenceSchedulerRequest withHeaders(UpdateInferenceSchedulerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateInferenceSchedulerRequest request;
    public UpdateInferenceSchedulerRequest withRequest(openapisdk.models.shared.UpdateInferenceSchedulerRequest request) {
        this.request = request;
        return this;
    }
}