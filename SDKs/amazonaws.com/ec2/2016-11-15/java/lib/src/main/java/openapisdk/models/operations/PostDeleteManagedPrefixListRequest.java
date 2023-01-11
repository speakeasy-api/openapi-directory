package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteManagedPrefixListRequest {
    public PostDeleteManagedPrefixListQueryParams queryParams;
    public PostDeleteManagedPrefixListRequest withQueryParams(PostDeleteManagedPrefixListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteManagedPrefixListHeaders headers;
    public PostDeleteManagedPrefixListRequest withHeaders(PostDeleteManagedPrefixListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteManagedPrefixListRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}