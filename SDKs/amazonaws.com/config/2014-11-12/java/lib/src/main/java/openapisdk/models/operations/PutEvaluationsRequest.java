package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEvaluationsRequest {
    public PutEvaluationsHeaders headers;
    public PutEvaluationsRequest withHeaders(PutEvaluationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutEvaluationsRequest request;
    public PutEvaluationsRequest withRequest(openapisdk.models.shared.PutEvaluationsRequest request) {
        this.request = request;
        return this;
    }
}