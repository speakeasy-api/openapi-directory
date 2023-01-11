package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePageRequest {
    public DescribePageHeaders headers;
    public DescribePageRequest withHeaders(DescribePageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePageRequest request;
    public DescribePageRequest withRequest(openapisdk.models.shared.DescribePageRequest request) {
        this.request = request;
        return this;
    }
}