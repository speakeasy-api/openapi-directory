package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEvaluationResultsRequest {
    public DeleteEvaluationResultsHeaders headers;
    public DeleteEvaluationResultsRequest withHeaders(DeleteEvaluationResultsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEvaluationResultsRequest request;
    public DeleteEvaluationResultsRequest withRequest(openapisdk.models.shared.DeleteEvaluationResultsRequest request) {
        this.request = request;
        return this;
    }
}