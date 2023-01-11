package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteReceiptFilterRequest {
    public PostDeleteReceiptFilterQueryParams queryParams;
    public PostDeleteReceiptFilterRequest withQueryParams(PostDeleteReceiptFilterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteReceiptFilterHeaders headers;
    public PostDeleteReceiptFilterRequest withHeaders(PostDeleteReceiptFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteReceiptFilterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}