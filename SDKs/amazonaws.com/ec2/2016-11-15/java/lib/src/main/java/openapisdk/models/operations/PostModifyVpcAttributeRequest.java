package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcAttributeRequest {
    public PostModifyVpcAttributeQueryParams queryParams;
    public PostModifyVpcAttributeRequest withQueryParams(PostModifyVpcAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyVpcAttributeHeaders headers;
    public PostModifyVpcAttributeRequest withHeaders(PostModifyVpcAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyVpcAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}