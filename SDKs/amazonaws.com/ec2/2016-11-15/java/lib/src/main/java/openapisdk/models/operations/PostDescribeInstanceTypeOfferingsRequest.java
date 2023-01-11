package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceTypeOfferingsRequest {
    public PostDescribeInstanceTypeOfferingsQueryParams queryParams;
    public PostDescribeInstanceTypeOfferingsRequest withQueryParams(PostDescribeInstanceTypeOfferingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInstanceTypeOfferingsHeaders headers;
    public PostDescribeInstanceTypeOfferingsRequest withHeaders(PostDescribeInstanceTypeOfferingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInstanceTypeOfferingsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}