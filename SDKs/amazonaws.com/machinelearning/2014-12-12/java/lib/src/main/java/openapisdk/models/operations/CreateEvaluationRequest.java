package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEvaluationRequest {
    public CreateEvaluationHeaders headers;
    public CreateEvaluationRequest withHeaders(CreateEvaluationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEvaluationInput request;
    public CreateEvaluationRequest withRequest(openapisdk.models.shared.CreateEvaluationInput request) {
        this.request = request;
        return this;
    }
}