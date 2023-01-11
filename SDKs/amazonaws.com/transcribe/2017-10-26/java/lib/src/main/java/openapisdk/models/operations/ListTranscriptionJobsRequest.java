package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTranscriptionJobsRequest {
    public ListTranscriptionJobsQueryParams queryParams;
    public ListTranscriptionJobsRequest withQueryParams(ListTranscriptionJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTranscriptionJobsHeaders headers;
    public ListTranscriptionJobsRequest withHeaders(ListTranscriptionJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTranscriptionJobsRequest request;
    public ListTranscriptionJobsRequest withRequest(openapisdk.models.shared.ListTranscriptionJobsRequest request) {
        this.request = request;
        return this;
    }
}