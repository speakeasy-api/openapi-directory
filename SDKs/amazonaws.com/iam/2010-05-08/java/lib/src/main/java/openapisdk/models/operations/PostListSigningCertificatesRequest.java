package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListSigningCertificatesRequest {
    public PostListSigningCertificatesQueryParams queryParams;
    public PostListSigningCertificatesRequest withQueryParams(PostListSigningCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListSigningCertificatesHeaders headers;
    public PostListSigningCertificatesRequest withHeaders(PostListSigningCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListSigningCertificatesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}