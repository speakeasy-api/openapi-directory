package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateHsmClientCertificateRequest {
    public PostCreateHsmClientCertificateQueryParams queryParams;
    public PostCreateHsmClientCertificateRequest withQueryParams(PostCreateHsmClientCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateHsmClientCertificateHeaders headers;
    public PostCreateHsmClientCertificateRequest withHeaders(PostCreateHsmClientCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateHsmClientCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}