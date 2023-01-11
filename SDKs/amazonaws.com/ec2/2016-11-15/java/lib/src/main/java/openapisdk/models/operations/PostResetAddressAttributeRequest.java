package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetAddressAttributeRequest {
    public PostResetAddressAttributeQueryParams queryParams;
    public PostResetAddressAttributeRequest withQueryParams(PostResetAddressAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResetAddressAttributeHeaders headers;
    public PostResetAddressAttributeRequest withHeaders(PostResetAddressAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResetAddressAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}