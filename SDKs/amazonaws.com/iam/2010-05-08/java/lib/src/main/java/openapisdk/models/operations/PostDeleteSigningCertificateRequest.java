package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSigningCertificateRequest {
    public PostDeleteSigningCertificateQueryParams queryParams;
    public PostDeleteSigningCertificateRequest withQueryParams(PostDeleteSigningCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteSigningCertificateHeaders headers;
    public PostDeleteSigningCertificateRequest withHeaders(PostDeleteSigningCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteSigningCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}