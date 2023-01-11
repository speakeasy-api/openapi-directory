package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSshPublicKeyRequest {
    public PostGetSshPublicKeyQueryParams queryParams;
    public PostGetSshPublicKeyRequest withQueryParams(PostGetSshPublicKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetSshPublicKeyHeaders headers;
    public PostGetSshPublicKeyRequest withHeaders(PostGetSshPublicKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetSshPublicKeyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}