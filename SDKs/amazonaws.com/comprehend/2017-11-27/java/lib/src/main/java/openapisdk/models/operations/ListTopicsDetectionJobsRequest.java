package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTopicsDetectionJobsRequest {
    public ListTopicsDetectionJobsQueryParams queryParams;
    public ListTopicsDetectionJobsRequest withQueryParams(ListTopicsDetectionJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTopicsDetectionJobsHeaders headers;
    public ListTopicsDetectionJobsRequest withHeaders(ListTopicsDetectionJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTopicsDetectionJobsRequest request;
    public ListTopicsDetectionJobsRequest withRequest(openapisdk.models.shared.ListTopicsDetectionJobsRequest request) {
        this.request = request;
        return this;
    }
}