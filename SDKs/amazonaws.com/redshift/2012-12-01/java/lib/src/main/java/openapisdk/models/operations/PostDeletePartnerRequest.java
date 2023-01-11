package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeletePartnerRequest {
    public PostDeletePartnerQueryParams queryParams;
    public PostDeletePartnerRequest withQueryParams(PostDeletePartnerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeletePartnerHeaders headers;
    public PostDeletePartnerRequest withHeaders(PostDeletePartnerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeletePartnerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}