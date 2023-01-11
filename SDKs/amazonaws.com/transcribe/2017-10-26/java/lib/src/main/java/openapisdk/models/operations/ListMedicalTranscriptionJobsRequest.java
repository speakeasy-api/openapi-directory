package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMedicalTranscriptionJobsRequest {
    public ListMedicalTranscriptionJobsQueryParams queryParams;
    public ListMedicalTranscriptionJobsRequest withQueryParams(ListMedicalTranscriptionJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMedicalTranscriptionJobsHeaders headers;
    public ListMedicalTranscriptionJobsRequest withHeaders(ListMedicalTranscriptionJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListMedicalTranscriptionJobsRequest request;
    public ListMedicalTranscriptionJobsRequest withRequest(openapisdk.models.shared.ListMedicalTranscriptionJobsRequest request) {
        this.request = request;
        return this;
    }
}