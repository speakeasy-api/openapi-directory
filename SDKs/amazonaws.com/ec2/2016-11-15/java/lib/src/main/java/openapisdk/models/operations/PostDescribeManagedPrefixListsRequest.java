package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeManagedPrefixListsRequest {
    public PostDescribeManagedPrefixListsQueryParams queryParams;
    public PostDescribeManagedPrefixListsRequest withQueryParams(PostDescribeManagedPrefixListsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeManagedPrefixListsHeaders headers;
    public PostDescribeManagedPrefixListsRequest withHeaders(PostDescribeManagedPrefixListsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeManagedPrefixListsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}