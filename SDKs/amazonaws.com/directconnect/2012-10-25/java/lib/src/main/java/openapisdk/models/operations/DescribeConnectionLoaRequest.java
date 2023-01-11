package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectionLoaRequest {
    public DescribeConnectionLoaHeaders headers;
    public DescribeConnectionLoaRequest withHeaders(DescribeConnectionLoaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConnectionLoaRequest request;
    public DescribeConnectionLoaRequest withRequest(openapisdk.models.shared.DescribeConnectionLoaRequest request) {
        this.request = request;
        return this;
    }
}