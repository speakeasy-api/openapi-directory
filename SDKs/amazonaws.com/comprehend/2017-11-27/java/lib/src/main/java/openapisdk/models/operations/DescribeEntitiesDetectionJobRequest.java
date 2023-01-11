package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEntitiesDetectionJobRequest {
    public DescribeEntitiesDetectionJobHeaders headers;
    public DescribeEntitiesDetectionJobRequest withHeaders(DescribeEntitiesDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEntitiesDetectionJobRequest request;
    public DescribeEntitiesDetectionJobRequest withRequest(openapisdk.models.shared.DescribeEntitiesDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}