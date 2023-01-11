package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateServerCertificateRequest {
    public PostUpdateServerCertificateQueryParams queryParams;
    public PostUpdateServerCertificateRequest withQueryParams(PostUpdateServerCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateServerCertificateHeaders headers;
    public PostUpdateServerCertificateRequest withHeaders(PostUpdateServerCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateServerCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}