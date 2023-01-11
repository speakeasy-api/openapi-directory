package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptReservedNodeExchangeRequest {
    public PostAcceptReservedNodeExchangeQueryParams queryParams;
    public PostAcceptReservedNodeExchangeRequest withQueryParams(PostAcceptReservedNodeExchangeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAcceptReservedNodeExchangeHeaders headers;
    public PostAcceptReservedNodeExchangeRequest withHeaders(PostAcceptReservedNodeExchangeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAcceptReservedNodeExchangeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}