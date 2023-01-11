package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPiiEntitiesDetectionJobsRequest {
    public ListPiiEntitiesDetectionJobsHeaders headers;
    public ListPiiEntitiesDetectionJobsRequest withHeaders(ListPiiEntitiesDetectionJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPiiEntitiesDetectionJobsRequest request;
    public ListPiiEntitiesDetectionJobsRequest withRequest(openapisdk.models.shared.ListPiiEntitiesDetectionJobsRequest request) {
        this.request = request;
        return this;
    }
}