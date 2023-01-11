package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetServerCertificateRequest {
    public PostGetServerCertificateQueryParams queryParams;
    public PostGetServerCertificateRequest withQueryParams(PostGetServerCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetServerCertificateHeaders headers;
    public PostGetServerCertificateRequest withHeaders(PostGetServerCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetServerCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}