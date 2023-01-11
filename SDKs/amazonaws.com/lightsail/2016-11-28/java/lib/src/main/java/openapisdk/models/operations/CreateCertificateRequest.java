package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCertificateRequest {
    public CreateCertificateHeaders headers;
    public CreateCertificateRequest withHeaders(CreateCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCertificateRequest request;
    public CreateCertificateRequest withRequest(openapisdk.models.shared.CreateCertificateRequest request) {
        this.request = request;
        return this;
    }
}