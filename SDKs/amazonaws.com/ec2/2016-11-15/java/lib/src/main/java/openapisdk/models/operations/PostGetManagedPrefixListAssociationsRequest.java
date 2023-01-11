package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetManagedPrefixListAssociationsRequest {
    public PostGetManagedPrefixListAssociationsQueryParams queryParams;
    public PostGetManagedPrefixListAssociationsRequest withQueryParams(PostGetManagedPrefixListAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetManagedPrefixListAssociationsHeaders headers;
    public PostGetManagedPrefixListAssociationsRequest withHeaders(PostGetManagedPrefixListAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetManagedPrefixListAssociationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}