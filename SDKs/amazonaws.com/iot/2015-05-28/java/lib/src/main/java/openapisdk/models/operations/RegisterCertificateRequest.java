package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterCertificateRequest {
    public RegisterCertificateQueryParams queryParams;
    public RegisterCertificateRequest withQueryParams(RegisterCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RegisterCertificateHeaders headers;
    public RegisterCertificateRequest withHeaders(RegisterCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RegisterCertificateRequestBody request;
    public RegisterCertificateRequest withRequest(RegisterCertificateRequestBody request) {
        this.request = request;
        return this;
    }
}