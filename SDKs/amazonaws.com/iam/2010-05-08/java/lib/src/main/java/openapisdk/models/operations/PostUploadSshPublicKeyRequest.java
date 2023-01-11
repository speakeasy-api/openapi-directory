package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadSshPublicKeyRequest {
    public PostUploadSshPublicKeyQueryParams queryParams;
    public PostUploadSshPublicKeyRequest withQueryParams(PostUploadSshPublicKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUploadSshPublicKeyHeaders headers;
    public PostUploadSshPublicKeyRequest withHeaders(PostUploadSshPublicKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUploadSshPublicKeyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}