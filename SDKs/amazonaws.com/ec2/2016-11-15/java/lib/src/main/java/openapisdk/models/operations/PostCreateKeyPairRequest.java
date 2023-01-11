package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateKeyPairRequest {
    public PostCreateKeyPairQueryParams queryParams;
    public PostCreateKeyPairRequest withQueryParams(PostCreateKeyPairQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateKeyPairHeaders headers;
    public PostCreateKeyPairRequest withHeaders(PostCreateKeyPairHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateKeyPairRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}