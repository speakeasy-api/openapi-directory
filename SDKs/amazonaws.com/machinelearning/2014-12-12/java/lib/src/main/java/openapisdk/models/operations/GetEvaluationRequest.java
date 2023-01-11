package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEvaluationRequest {
    public GetEvaluationHeaders headers;
    public GetEvaluationRequest withHeaders(GetEvaluationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEvaluationInput request;
    public GetEvaluationRequest withRequest(openapisdk.models.shared.GetEvaluationInput request) {
        this.request = request;
        return this;
    }
}