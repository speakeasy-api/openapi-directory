package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSentimentDetectionJobsRequest {
    public ListSentimentDetectionJobsQueryParams queryParams;
    public ListSentimentDetectionJobsRequest withQueryParams(ListSentimentDetectionJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSentimentDetectionJobsHeaders headers;
    public ListSentimentDetectionJobsRequest withHeaders(ListSentimentDetectionJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSentimentDetectionJobsRequest request;
    public ListSentimentDetectionJobsRequest withRequest(openapisdk.models.shared.ListSentimentDetectionJobsRequest request) {
        this.request = request;
        return this;
    }
}