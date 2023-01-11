package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListServerCertificatesRequest {
    public PostListServerCertificatesQueryParams queryParams;
    public PostListServerCertificatesRequest withQueryParams(PostListServerCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListServerCertificatesHeaders headers;
    public PostListServerCertificatesRequest withHeaders(PostListServerCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListServerCertificatesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}