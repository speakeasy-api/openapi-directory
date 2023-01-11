package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EvaluateExpressionRequest {
    public EvaluateExpressionHeaders headers;
    public EvaluateExpressionRequest withHeaders(EvaluateExpressionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EvaluateExpressionInput request;
    public EvaluateExpressionRequest withRequest(openapisdk.models.shared.EvaluateExpressionInput request) {
        this.request = request;
        return this;
    }
}