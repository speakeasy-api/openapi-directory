package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventsDetectionJobsRequest {
    public ListEventsDetectionJobsQueryParams queryParams;
    public ListEventsDetectionJobsRequest withQueryParams(ListEventsDetectionJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEventsDetectionJobsHeaders headers;
    public ListEventsDetectionJobsRequest withHeaders(ListEventsDetectionJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEventsDetectionJobsRequest request;
    public ListEventsDetectionJobsRequest withRequest(openapisdk.models.shared.ListEventsDetectionJobsRequest request) {
        this.request = request;
        return this;
    }
}