package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTopicsDetectionJobRequest {
    public DescribeTopicsDetectionJobHeaders headers;
    public DescribeTopicsDetectionJobRequest withHeaders(DescribeTopicsDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTopicsDetectionJobRequest request;
    public DescribeTopicsDetectionJobRequest withRequest(openapisdk.models.shared.DescribeTopicsDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}