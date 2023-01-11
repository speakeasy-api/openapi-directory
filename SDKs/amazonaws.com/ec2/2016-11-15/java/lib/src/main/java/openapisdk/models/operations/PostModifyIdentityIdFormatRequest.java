package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyIdentityIdFormatRequest {
    public PostModifyIdentityIdFormatQueryParams queryParams;
    public PostModifyIdentityIdFormatRequest withQueryParams(PostModifyIdentityIdFormatQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyIdentityIdFormatHeaders headers;
    public PostModifyIdentityIdFormatRequest withHeaders(PostModifyIdentityIdFormatHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyIdentityIdFormatRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}