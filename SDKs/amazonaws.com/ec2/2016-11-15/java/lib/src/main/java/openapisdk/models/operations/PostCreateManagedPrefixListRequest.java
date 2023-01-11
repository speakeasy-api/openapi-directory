package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateManagedPrefixListRequest {
    public PostCreateManagedPrefixListQueryParams queryParams;
    public PostCreateManagedPrefixListRequest withQueryParams(PostCreateManagedPrefixListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateManagedPrefixListHeaders headers;
    public PostCreateManagedPrefixListRequest withHeaders(PostCreateManagedPrefixListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateManagedPrefixListRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}