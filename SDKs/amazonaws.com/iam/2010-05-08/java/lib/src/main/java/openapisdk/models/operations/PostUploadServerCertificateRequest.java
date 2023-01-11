package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadServerCertificateRequest {
    public PostUploadServerCertificateQueryParams queryParams;
    public PostUploadServerCertificateRequest withQueryParams(PostUploadServerCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUploadServerCertificateHeaders headers;
    public PostUploadServerCertificateRequest withHeaders(PostUploadServerCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUploadServerCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}