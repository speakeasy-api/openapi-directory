package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePhiDetectionJobRequest {
    public DescribePhiDetectionJobHeaders headers;
    public DescribePhiDetectionJobRequest withHeaders(DescribePhiDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePhiDetectionJobRequest request;
    public DescribePhiDetectionJobRequest withRequest(openapisdk.models.shared.DescribePhiDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}