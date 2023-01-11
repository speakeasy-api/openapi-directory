package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRxNormInferenceJobsRequest {
    public ListRxNormInferenceJobsHeaders headers;
    public ListRxNormInferenceJobsRequest withHeaders(ListRxNormInferenceJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRxNormInferenceJobsRequest request;
    public ListRxNormInferenceJobsRequest withRequest(openapisdk.models.shared.ListRxNormInferenceJobsRequest request) {
        this.request = request;
        return this;
    }
}