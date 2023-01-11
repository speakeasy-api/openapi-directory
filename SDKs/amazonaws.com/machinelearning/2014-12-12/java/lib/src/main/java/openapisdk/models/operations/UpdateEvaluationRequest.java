package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEvaluationRequest {
    public UpdateEvaluationHeaders headers;
    public UpdateEvaluationRequest withHeaders(UpdateEvaluationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEvaluationInput request;
    public UpdateEvaluationRequest withRequest(openapisdk.models.shared.UpdateEvaluationInput request) {
        this.request = request;
        return this;
    }
}