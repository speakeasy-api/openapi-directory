package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetReservedInstancesExchangeQuoteRequest {
    public PostGetReservedInstancesExchangeQuoteQueryParams queryParams;
    public PostGetReservedInstancesExchangeQuoteRequest withQueryParams(PostGetReservedInstancesExchangeQuoteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetReservedInstancesExchangeQuoteHeaders headers;
    public PostGetReservedInstancesExchangeQuoteRequest withHeaders(PostGetReservedInstancesExchangeQuoteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetReservedInstancesExchangeQuoteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}