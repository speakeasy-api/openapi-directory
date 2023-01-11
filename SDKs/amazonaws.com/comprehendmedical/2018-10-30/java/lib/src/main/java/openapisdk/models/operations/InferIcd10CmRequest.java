package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InferIcd10CmRequest {
    public InferIcd10CmHeaders headers;
    public InferIcd10CmRequest withHeaders(InferIcd10CmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InferIcd10CmRequest request;
    public InferIcd10CmRequest withRequest(openapisdk.models.shared.InferIcd10CmRequest request) {
        this.request = request;
        return this;
    }
}