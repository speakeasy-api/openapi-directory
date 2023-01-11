package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEventTrackerRequest {
    public DescribeEventTrackerHeaders headers;
    public DescribeEventTrackerRequest withHeaders(DescribeEventTrackerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEventTrackerRequest request;
    public DescribeEventTrackerRequest withRequest(openapisdk.models.shared.DescribeEventTrackerRequest request) {
        this.request = request;
        return this;
    }
}