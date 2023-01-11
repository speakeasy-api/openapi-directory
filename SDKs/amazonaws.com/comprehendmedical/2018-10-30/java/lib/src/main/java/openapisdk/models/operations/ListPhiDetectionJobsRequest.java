package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPhiDetectionJobsRequest {
    public ListPhiDetectionJobsHeaders headers;
    public ListPhiDetectionJobsRequest withHeaders(ListPhiDetectionJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPhiDetectionJobsRequest request;
    public ListPhiDetectionJobsRequest withRequest(openapisdk.models.shared.ListPhiDetectionJobsRequest request) {
        this.request = request;
        return this;
    }
}