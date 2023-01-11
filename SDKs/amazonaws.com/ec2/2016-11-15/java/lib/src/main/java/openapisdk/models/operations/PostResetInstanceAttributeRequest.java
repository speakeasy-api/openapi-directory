package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetInstanceAttributeRequest {
    public PostResetInstanceAttributeQueryParams queryParams;
    public PostResetInstanceAttributeRequest withQueryParams(PostResetInstanceAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResetInstanceAttributeHeaders headers;
    public PostResetInstanceAttributeRequest withHeaders(PostResetInstanceAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResetInstanceAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}