package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstanceAttributeRequest {
    public PostModifyInstanceAttributeQueryParams queryParams;
    public PostModifyInstanceAttributeRequest withQueryParams(PostModifyInstanceAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyInstanceAttributeHeaders headers;
    public PostModifyInstanceAttributeRequest withHeaders(PostModifyInstanceAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyInstanceAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}