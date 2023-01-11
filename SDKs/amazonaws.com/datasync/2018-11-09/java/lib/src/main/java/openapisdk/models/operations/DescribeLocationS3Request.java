package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLocationS3Request {
    public DescribeLocationS3Headers headers;
    public DescribeLocationS3Request withHeaders(DescribeLocationS3Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLocationS3Request request;
    public DescribeLocationS3Request withRequest(openapisdk.models.shared.DescribeLocationS3Request request) {
        this.request = request;
        return this;
    }
}