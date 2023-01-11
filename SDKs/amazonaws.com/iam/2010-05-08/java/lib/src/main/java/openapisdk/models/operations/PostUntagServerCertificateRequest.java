package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagServerCertificateRequest {
    public PostUntagServerCertificateQueryParams queryParams;
    public PostUntagServerCertificateRequest withQueryParams(PostUntagServerCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUntagServerCertificateHeaders headers;
    public PostUntagServerCertificateRequest withHeaders(PostUntagServerCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUntagServerCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}