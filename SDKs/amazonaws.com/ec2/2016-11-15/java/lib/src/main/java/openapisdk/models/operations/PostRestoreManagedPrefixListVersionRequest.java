package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreManagedPrefixListVersionRequest {
    public PostRestoreManagedPrefixListVersionQueryParams queryParams;
    public PostRestoreManagedPrefixListVersionRequest withQueryParams(PostRestoreManagedPrefixListVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRestoreManagedPrefixListVersionHeaders headers;
    public PostRestoreManagedPrefixListVersionRequest withHeaders(PostRestoreManagedPrefixListVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRestoreManagedPrefixListVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}