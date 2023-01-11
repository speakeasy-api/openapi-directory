package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSpotPriceHistoryRequest {
    public PostDescribeSpotPriceHistoryQueryParams queryParams;
    public PostDescribeSpotPriceHistoryRequest withQueryParams(PostDescribeSpotPriceHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSpotPriceHistoryHeaders headers;
    public PostDescribeSpotPriceHistoryRequest withHeaders(PostDescribeSpotPriceHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSpotPriceHistoryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}