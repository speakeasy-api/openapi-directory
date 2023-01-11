package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartMlEvaluationTaskRunRequest {
    public StartMlEvaluationTaskRunHeaders headers;
    public StartMlEvaluationTaskRunRequest withHeaders(StartMlEvaluationTaskRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartMlEvaluationTaskRunRequest request;
    public StartMlEvaluationTaskRunRequest withRequest(openapisdk.models.shared.StartMlEvaluationTaskRunRequest request) {
        this.request = request;
        return this;
    }
}