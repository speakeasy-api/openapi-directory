package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagServerCertificateRequest {
    public PostTagServerCertificateQueryParams queryParams;
    public PostTagServerCertificateRequest withQueryParams(PostTagServerCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTagServerCertificateHeaders headers;
    public PostTagServerCertificateRequest withHeaders(PostTagServerCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTagServerCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}