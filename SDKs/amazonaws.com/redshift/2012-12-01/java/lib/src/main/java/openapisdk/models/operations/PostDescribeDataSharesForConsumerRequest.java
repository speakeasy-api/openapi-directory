package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDataSharesForConsumerRequest {
    public PostDescribeDataSharesForConsumerQueryParams queryParams;
    public PostDescribeDataSharesForConsumerRequest withQueryParams(PostDescribeDataSharesForConsumerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDataSharesForConsumerHeaders headers;
    public PostDescribeDataSharesForConsumerRequest withHeaders(PostDescribeDataSharesForConsumerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDataSharesForConsumerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}