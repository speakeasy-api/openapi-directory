package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetReservedNodeExchangeOfferingsRequest {
    public PostGetReservedNodeExchangeOfferingsQueryParams queryParams;
    public PostGetReservedNodeExchangeOfferingsRequest withQueryParams(PostGetReservedNodeExchangeOfferingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetReservedNodeExchangeOfferingsHeaders headers;
    public PostGetReservedNodeExchangeOfferingsRequest withHeaders(PostGetReservedNodeExchangeOfferingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetReservedNodeExchangeOfferingsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}