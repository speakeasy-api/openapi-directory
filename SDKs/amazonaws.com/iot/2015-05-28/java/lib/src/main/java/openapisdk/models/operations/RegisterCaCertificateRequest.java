package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterCaCertificateRequest {
    public RegisterCaCertificateQueryParams queryParams;
    public RegisterCaCertificateRequest withQueryParams(RegisterCaCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RegisterCaCertificateHeaders headers;
    public RegisterCaCertificateRequest withHeaders(RegisterCaCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RegisterCaCertificateRequestBody request;
    public RegisterCaCertificateRequest withRequest(RegisterCaCertificateRequestBody request) {
        this.request = request;
        return this;
    }
}