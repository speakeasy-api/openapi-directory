package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListReceiptFiltersRequest {
    public PostListReceiptFiltersQueryParams queryParams;
    public PostListReceiptFiltersRequest withQueryParams(PostListReceiptFiltersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListReceiptFiltersHeaders headers;
    public PostListReceiptFiltersRequest withHeaders(PostListReceiptFiltersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListReceiptFiltersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}