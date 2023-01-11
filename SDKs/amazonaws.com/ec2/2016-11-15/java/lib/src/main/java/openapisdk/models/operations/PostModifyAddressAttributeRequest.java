package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyAddressAttributeRequest {
    public PostModifyAddressAttributeQueryParams queryParams;
    public PostModifyAddressAttributeRequest withQueryParams(PostModifyAddressAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyAddressAttributeHeaders headers;
    public PostModifyAddressAttributeRequest withHeaders(PostModifyAddressAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyAddressAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}