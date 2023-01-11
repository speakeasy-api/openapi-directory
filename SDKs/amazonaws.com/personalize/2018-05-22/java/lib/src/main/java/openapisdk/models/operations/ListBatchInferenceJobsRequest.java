package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBatchInferenceJobsRequest {
    public ListBatchInferenceJobsQueryParams queryParams;
    public ListBatchInferenceJobsRequest withQueryParams(ListBatchInferenceJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBatchInferenceJobsHeaders headers;
    public ListBatchInferenceJobsRequest withHeaders(ListBatchInferenceJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListBatchInferenceJobsRequest request;
    public ListBatchInferenceJobsRequest withRequest(openapisdk.models.shared.ListBatchInferenceJobsRequest request) {
        this.request = request;
        return this;
    }
}