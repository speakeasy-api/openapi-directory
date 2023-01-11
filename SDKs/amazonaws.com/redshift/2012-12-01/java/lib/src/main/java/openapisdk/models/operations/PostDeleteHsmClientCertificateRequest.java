package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteHsmClientCertificateRequest {
    public PostDeleteHsmClientCertificateQueryParams queryParams;
    public PostDeleteHsmClientCertificateRequest withQueryParams(PostDeleteHsmClientCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteHsmClientCertificateHeaders headers;
    public PostDeleteHsmClientCertificateRequest withHeaders(PostDeleteHsmClientCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteHsmClientCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}