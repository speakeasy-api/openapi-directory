package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutExternalEvaluationRequest {
    public PutExternalEvaluationHeaders headers;
    public PutExternalEvaluationRequest withHeaders(PutExternalEvaluationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutExternalEvaluationRequest request;
    public PutExternalEvaluationRequest withRequest(openapisdk.models.shared.PutExternalEvaluationRequest request) {
        this.request = request;
        return this;
    }
}