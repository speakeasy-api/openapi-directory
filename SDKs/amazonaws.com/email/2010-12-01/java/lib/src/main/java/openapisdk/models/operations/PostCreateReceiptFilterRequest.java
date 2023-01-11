package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateReceiptFilterRequest {
    public PostCreateReceiptFilterQueryParams queryParams;
    public PostCreateReceiptFilterRequest withQueryParams(PostCreateReceiptFilterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateReceiptFilterHeaders headers;
    public PostCreateReceiptFilterRequest withHeaders(PostCreateReceiptFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateReceiptFilterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}