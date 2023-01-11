package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterCertificateRequest {
    public RegisterCertificateHeaders headers;
    public RegisterCertificateRequest withHeaders(RegisterCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterCertificateRequest request;
    public RegisterCertificateRequest withRequest(openapisdk.models.shared.RegisterCertificateRequest request) {
        this.request = request;
        return this;
    }
}