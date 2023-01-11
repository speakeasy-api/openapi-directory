package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartIcd10CmInferenceJobRequest {
    public StartIcd10CmInferenceJobHeaders headers;
    public StartIcd10CmInferenceJobRequest withHeaders(StartIcd10CmInferenceJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartIcd10CmInferenceJobRequest request;
    public StartIcd10CmInferenceJobRequest withRequest(openapisdk.models.shared.StartIcd10CmInferenceJobRequest request) {
        this.request = request;
        return this;
    }
}