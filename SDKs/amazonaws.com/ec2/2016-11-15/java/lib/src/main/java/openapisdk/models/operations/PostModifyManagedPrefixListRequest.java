package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyManagedPrefixListRequest {
    public PostModifyManagedPrefixListQueryParams queryParams;
    public PostModifyManagedPrefixListRequest withQueryParams(PostModifyManagedPrefixListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyManagedPrefixListHeaders headers;
    public PostModifyManagedPrefixListRequest withHeaders(PostModifyManagedPrefixListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyManagedPrefixListRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}