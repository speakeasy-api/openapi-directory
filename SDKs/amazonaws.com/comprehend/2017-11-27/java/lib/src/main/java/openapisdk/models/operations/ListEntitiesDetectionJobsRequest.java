package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEntitiesDetectionJobsRequest {
    public ListEntitiesDetectionJobsQueryParams queryParams;
    public ListEntitiesDetectionJobsRequest withQueryParams(ListEntitiesDetectionJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEntitiesDetectionJobsHeaders headers;
    public ListEntitiesDetectionJobsRequest withHeaders(ListEntitiesDetectionJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEntitiesDetectionJobsRequest request;
    public ListEntitiesDetectionJobsRequest withRequest(openapisdk.models.shared.ListEntitiesDetectionJobsRequest request) {
        this.request = request;
        return this;
    }
}