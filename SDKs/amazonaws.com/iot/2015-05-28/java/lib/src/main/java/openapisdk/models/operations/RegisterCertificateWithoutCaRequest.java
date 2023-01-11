package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterCertificateWithoutCaRequest {
    public RegisterCertificateWithoutCaHeaders headers;
    public RegisterCertificateWithoutCaRequest withHeaders(RegisterCertificateWithoutCaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RegisterCertificateWithoutCaRequestBody request;
    public RegisterCertificateWithoutCaRequest withRequest(RegisterCertificateWithoutCaRequestBody request) {
        this.request = request;
        return this;
    }
}