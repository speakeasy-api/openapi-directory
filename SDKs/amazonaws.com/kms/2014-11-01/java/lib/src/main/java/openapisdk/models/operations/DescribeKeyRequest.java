package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeKeyRequest {
    public DescribeKeyHeaders headers;
    public DescribeKeyRequest withHeaders(DescribeKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeKeyRequest request;
    public DescribeKeyRequest withRequest(openapisdk.models.shared.DescribeKeyRequest request) {
        this.request = request;
        return this;
    }
}