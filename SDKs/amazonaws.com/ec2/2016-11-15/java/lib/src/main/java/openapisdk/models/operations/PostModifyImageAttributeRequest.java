package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyImageAttributeRequest {
    public PostModifyImageAttributeQueryParams queryParams;
    public PostModifyImageAttributeRequest withQueryParams(PostModifyImageAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyImageAttributeHeaders headers;
    public PostModifyImageAttributeRequest withHeaders(PostModifyImageAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyImageAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}