package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSshPublicKeyRequest {
    public PostDeleteSshPublicKeyQueryParams queryParams;
    public PostDeleteSshPublicKeyRequest withQueryParams(PostDeleteSshPublicKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteSshPublicKeyHeaders headers;
    public PostDeleteSshPublicKeyRequest withHeaders(PostDeleteSshPublicKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteSshPublicKeyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}