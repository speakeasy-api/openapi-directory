package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdatePartnerStatusRequest {
    public PostUpdatePartnerStatusQueryParams queryParams;
    public PostUpdatePartnerStatusRequest withQueryParams(PostUpdatePartnerStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdatePartnerStatusHeaders headers;
    public PostUpdatePartnerStatusRequest withHeaders(PostUpdatePartnerStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdatePartnerStatusRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}