package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListKeyPhrasesDetectionJobsRequest {
    public ListKeyPhrasesDetectionJobsQueryParams queryParams;
    public ListKeyPhrasesDetectionJobsRequest withQueryParams(ListKeyPhrasesDetectionJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListKeyPhrasesDetectionJobsHeaders headers;
    public ListKeyPhrasesDetectionJobsRequest withHeaders(ListKeyPhrasesDetectionJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListKeyPhrasesDetectionJobsRequest request;
    public ListKeyPhrasesDetectionJobsRequest withRequest(openapisdk.models.shared.ListKeyPhrasesDetectionJobsRequest request) {
        this.request = request;
        return this;
    }
}