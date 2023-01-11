package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDataSharesForProducerRequest {
    public PostDescribeDataSharesForProducerQueryParams queryParams;
    public PostDescribeDataSharesForProducerRequest withQueryParams(PostDescribeDataSharesForProducerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDataSharesForProducerHeaders headers;
    public PostDescribeDataSharesForProducerRequest withHeaders(PostDescribeDataSharesForProducerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDataSharesForProducerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}