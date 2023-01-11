package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEnvironmentsRequest {
    public DescribeEnvironmentsHeaders headers;
    public DescribeEnvironmentsRequest withHeaders(DescribeEnvironmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEnvironmentsRequest request;
    public DescribeEnvironmentsRequest withRequest(openapisdk.models.shared.DescribeEnvironmentsRequest request) {
        this.request = request;
        return this;
    }
}