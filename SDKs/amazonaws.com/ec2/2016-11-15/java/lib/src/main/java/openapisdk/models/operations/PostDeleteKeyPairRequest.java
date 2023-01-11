package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteKeyPairRequest {
    public PostDeleteKeyPairQueryParams queryParams;
    public PostDeleteKeyPairRequest withQueryParams(PostDeleteKeyPairQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteKeyPairHeaders headers;
    public PostDeleteKeyPairRequest withHeaders(PostDeleteKeyPairHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteKeyPairRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}