package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetFpgaImageAttributeRequest {
    public PostResetFpgaImageAttributeQueryParams queryParams;
    public PostResetFpgaImageAttributeRequest withQueryParams(PostResetFpgaImageAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResetFpgaImageAttributeHeaders headers;
    public PostResetFpgaImageAttributeRequest withHeaders(PostResetFpgaImageAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResetFpgaImageAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}