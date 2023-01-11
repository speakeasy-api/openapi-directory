package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInferenceSchedulerRequest {
    public CreateInferenceSchedulerHeaders headers;
    public CreateInferenceSchedulerRequest withHeaders(CreateInferenceSchedulerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateInferenceSchedulerRequest request;
    public CreateInferenceSchedulerRequest withRequest(openapisdk.models.shared.CreateInferenceSchedulerRequest request) {
        this.request = request;
        return this;
    }
}