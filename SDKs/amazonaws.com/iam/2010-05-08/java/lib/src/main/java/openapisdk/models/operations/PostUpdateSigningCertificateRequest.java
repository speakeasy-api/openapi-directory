package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateSigningCertificateRequest {
    public PostUpdateSigningCertificateQueryParams queryParams;
    public PostUpdateSigningCertificateRequest withQueryParams(PostUpdateSigningCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateSigningCertificateHeaders headers;
    public PostUpdateSigningCertificateRequest withHeaders(PostUpdateSigningCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateSigningCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}