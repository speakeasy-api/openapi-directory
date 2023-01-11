package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLocationSmbRequest {
    public DescribeLocationSmbHeaders headers;
    public DescribeLocationSmbRequest withHeaders(DescribeLocationSmbHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLocationSmbRequest request;
    public DescribeLocationSmbRequest withRequest(openapisdk.models.shared.DescribeLocationSmbRequest request) {
        this.request = request;
        return this;
    }
}