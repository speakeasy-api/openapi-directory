package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadSigningCertificateRequest {
    public PostUploadSigningCertificateQueryParams queryParams;
    public PostUploadSigningCertificateRequest withQueryParams(PostUploadSigningCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUploadSigningCertificateHeaders headers;
    public PostUploadSigningCertificateRequest withHeaders(PostUploadSigningCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUploadSigningCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}