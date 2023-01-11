package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopRxNormInferenceJobRequest {
    public StopRxNormInferenceJobHeaders headers;
    public StopRxNormInferenceJobRequest withHeaders(StopRxNormInferenceJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopRxNormInferenceJobRequest request;
    public StopRxNormInferenceJobRequest withRequest(openapisdk.models.shared.StopRxNormInferenceJobRequest request) {
        this.request = request;
        return this;
    }
}