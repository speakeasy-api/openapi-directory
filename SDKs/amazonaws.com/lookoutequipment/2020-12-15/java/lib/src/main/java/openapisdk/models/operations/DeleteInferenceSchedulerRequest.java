package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInferenceSchedulerRequest {
    public DeleteInferenceSchedulerHeaders headers;
    public DeleteInferenceSchedulerRequest withHeaders(DeleteInferenceSchedulerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteInferenceSchedulerRequest request;
    public DeleteInferenceSchedulerRequest withRequest(openapisdk.models.shared.DeleteInferenceSchedulerRequest request) {
        this.request = request;
        return this;
    }
}