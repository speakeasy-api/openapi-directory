package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBatchInferenceJobRequest {
    public CreateBatchInferenceJobHeaders headers;
    public CreateBatchInferenceJobRequest withHeaders(CreateBatchInferenceJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateBatchInferenceJobRequest request;
    public CreateBatchInferenceJobRequest withRequest(openapisdk.models.shared.CreateBatchInferenceJobRequest request) {
        this.request = request;
        return this;
    }
}