package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedCacheNodesOfferingsRequest {
    public PostDescribeReservedCacheNodesOfferingsQueryParams queryParams;
    public PostDescribeReservedCacheNodesOfferingsRequest withQueryParams(PostDescribeReservedCacheNodesOfferingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReservedCacheNodesOfferingsHeaders headers;
    public PostDescribeReservedCacheNodesOfferingsRequest withHeaders(PostDescribeReservedCacheNodesOfferingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReservedCacheNodesOfferingsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}