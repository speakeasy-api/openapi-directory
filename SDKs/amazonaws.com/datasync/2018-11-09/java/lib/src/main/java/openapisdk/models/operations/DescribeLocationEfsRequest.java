package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLocationEfsRequest {
    public DescribeLocationEfsHeaders headers;
    public DescribeLocationEfsRequest withHeaders(DescribeLocationEfsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLocationEfsRequest request;
    public DescribeLocationEfsRequest withRequest(openapisdk.models.shared.DescribeLocationEfsRequest request) {
        this.request = request;
        return this;
    }
}