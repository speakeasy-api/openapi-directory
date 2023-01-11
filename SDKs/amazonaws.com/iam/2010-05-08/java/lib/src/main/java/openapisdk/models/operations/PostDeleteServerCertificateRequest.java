package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteServerCertificateRequest {
    public PostDeleteServerCertificateQueryParams queryParams;
    public PostDeleteServerCertificateRequest withQueryParams(PostDeleteServerCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteServerCertificateHeaders headers;
    public PostDeleteServerCertificateRequest withHeaders(PostDeleteServerCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteServerCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}