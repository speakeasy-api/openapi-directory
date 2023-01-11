package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateSshPublicKeyRequest {
    public PostUpdateSshPublicKeyQueryParams queryParams;
    public PostUpdateSshPublicKeyRequest withQueryParams(PostUpdateSshPublicKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateSshPublicKeyHeaders headers;
    public PostUpdateSshPublicKeyRequest withHeaders(PostUpdateSshPublicKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateSshPublicKeyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}