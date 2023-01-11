package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDominantLanguageDetectionJobsRequest {
    public ListDominantLanguageDetectionJobsQueryParams queryParams;
    public ListDominantLanguageDetectionJobsRequest withQueryParams(ListDominantLanguageDetectionJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDominantLanguageDetectionJobsHeaders headers;
    public ListDominantLanguageDetectionJobsRequest withHeaders(ListDominantLanguageDetectionJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDominantLanguageDetectionJobsRequest request;
    public ListDominantLanguageDetectionJobsRequest withRequest(openapisdk.models.shared.ListDominantLanguageDetectionJobsRequest request) {
        this.request = request;
        return this;
    }
}