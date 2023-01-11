package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetImageAttributeRequest {
    public PostResetImageAttributeQueryParams queryParams;
    public PostResetImageAttributeRequest withQueryParams(PostResetImageAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResetImageAttributeHeaders headers;
    public PostResetImageAttributeRequest withHeaders(PostResetImageAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResetImageAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}