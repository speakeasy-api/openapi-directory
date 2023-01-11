package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProductViewRequest {
    public DescribeProductViewHeaders headers;
    public DescribeProductViewRequest withHeaders(DescribeProductViewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProductViewInput request;
    public DescribeProductViewRequest withRequest(openapisdk.models.shared.DescribeProductViewInput request) {
        this.request = request;
        return this;
    }
}