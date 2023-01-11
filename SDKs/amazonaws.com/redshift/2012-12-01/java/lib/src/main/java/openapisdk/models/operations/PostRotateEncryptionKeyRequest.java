package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRotateEncryptionKeyRequest {
    public PostRotateEncryptionKeyQueryParams queryParams;
    public PostRotateEncryptionKeyRequest withQueryParams(PostRotateEncryptionKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRotateEncryptionKeyHeaders headers;
    public PostRotateEncryptionKeyRequest withHeaders(PostRotateEncryptionKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRotateEncryptionKeyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}