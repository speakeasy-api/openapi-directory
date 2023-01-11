package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopIcd10CmInferenceJobRequest {
    public StopIcd10CmInferenceJobHeaders headers;
    public StopIcd10CmInferenceJobRequest withHeaders(StopIcd10CmInferenceJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopIcd10CmInferenceJobRequest request;
    public StopIcd10CmInferenceJobRequest withRequest(openapisdk.models.shared.StopIcd10CmInferenceJobRequest request) {
        this.request = request;
        return this;
    }
}