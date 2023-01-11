package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePrefixListsRequest {
    public PostDescribePrefixListsQueryParams queryParams;
    public PostDescribePrefixListsRequest withQueryParams(PostDescribePrefixListsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribePrefixListsHeaders headers;
    public PostDescribePrefixListsRequest withHeaders(PostDescribePrefixListsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribePrefixListsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}