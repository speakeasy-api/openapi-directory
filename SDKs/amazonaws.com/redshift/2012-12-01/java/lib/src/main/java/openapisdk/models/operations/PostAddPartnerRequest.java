package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddPartnerRequest {
    public PostAddPartnerQueryParams queryParams;
    public PostAddPartnerRequest withQueryParams(PostAddPartnerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAddPartnerHeaders headers;
    public PostAddPartnerRequest withHeaders(PostAddPartnerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAddPartnerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}