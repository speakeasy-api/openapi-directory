package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEventsDetectionJobRequest {
    public DescribeEventsDetectionJobHeaders headers;
    public DescribeEventsDetectionJobRequest withHeaders(DescribeEventsDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEventsDetectionJobRequest request;
    public DescribeEventsDetectionJobRequest withRequest(openapisdk.models.shared.DescribeEventsDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}