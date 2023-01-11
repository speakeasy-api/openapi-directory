package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEvaluationRequest {
    public DeleteEvaluationHeaders headers;
    public DeleteEvaluationRequest withHeaders(DeleteEvaluationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEvaluationInput request;
    public DeleteEvaluationRequest withRequest(openapisdk.models.shared.DeleteEvaluationInput request) {
        this.request = request;
        return this;
    }
}