package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartRxNormInferenceJobRequest {
    public StartRxNormInferenceJobHeaders headers;
    public StartRxNormInferenceJobRequest withHeaders(StartRxNormInferenceJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartRxNormInferenceJobRequest request;
    public StartRxNormInferenceJobRequest withRequest(openapisdk.models.shared.StartRxNormInferenceJobRequest request) {
        this.request = request;
        return this;
    }
}