package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptReservedInstancesExchangeQuoteRequest {
    public PostAcceptReservedInstancesExchangeQuoteQueryParams queryParams;
    public PostAcceptReservedInstancesExchangeQuoteRequest withQueryParams(PostAcceptReservedInstancesExchangeQuoteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAcceptReservedInstancesExchangeQuoteHeaders headers;
    public PostAcceptReservedInstancesExchangeQuoteRequest withHeaders(PostAcceptReservedInstancesExchangeQuoteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAcceptReservedInstancesExchangeQuoteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}