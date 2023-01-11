package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyFpgaImageAttributeRequest {
    public PostModifyFpgaImageAttributeQueryParams queryParams;
    public PostModifyFpgaImageAttributeRequest withQueryParams(PostModifyFpgaImageAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyFpgaImageAttributeHeaders headers;
    public PostModifyFpgaImageAttributeRequest withHeaders(PostModifyFpgaImageAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyFpgaImageAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}