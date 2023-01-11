package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartConfigRulesEvaluationRequest {
    public StartConfigRulesEvaluationHeaders headers;
    public StartConfigRulesEvaluationRequest withHeaders(StartConfigRulesEvaluationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartConfigRulesEvaluationRequest request;
    public StartConfigRulesEvaluationRequest withRequest(openapisdk.models.shared.StartConfigRulesEvaluationRequest request) {
        this.request = request;
        return this;
    }
}