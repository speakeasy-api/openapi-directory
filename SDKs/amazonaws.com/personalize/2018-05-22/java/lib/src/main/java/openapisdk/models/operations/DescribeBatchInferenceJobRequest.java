package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBatchInferenceJobRequest {
    public DescribeBatchInferenceJobHeaders headers;
    public DescribeBatchInferenceJobRequest withHeaders(DescribeBatchInferenceJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeBatchInferenceJobRequest request;
    public DescribeBatchInferenceJobRequest withRequest(openapisdk.models.shared.DescribeBatchInferenceJobRequest request) {
        this.request = request;
        return this;
    }
}