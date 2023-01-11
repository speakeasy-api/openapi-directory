package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetManagedPrefixListEntriesRequest {
    public PostGetManagedPrefixListEntriesQueryParams queryParams;
    public PostGetManagedPrefixListEntriesRequest withQueryParams(PostGetManagedPrefixListEntriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetManagedPrefixListEntriesHeaders headers;
    public PostGetManagedPrefixListEntriesRequest withHeaders(PostGetManagedPrefixListEntriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetManagedPrefixListEntriesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}