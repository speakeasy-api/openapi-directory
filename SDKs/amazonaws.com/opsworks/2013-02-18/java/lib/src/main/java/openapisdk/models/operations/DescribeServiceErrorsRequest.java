package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeServiceErrorsRequest {
    public DescribeServiceErrorsHeaders headers;
    public DescribeServiceErrorsRequest withHeaders(DescribeServiceErrorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeServiceErrorsRequest request;
    public DescribeServiceErrorsRequest withRequest(openapisdk.models.shared.DescribeServiceErrorsRequest request) {
        this.request = request;
        return this;
    }
}