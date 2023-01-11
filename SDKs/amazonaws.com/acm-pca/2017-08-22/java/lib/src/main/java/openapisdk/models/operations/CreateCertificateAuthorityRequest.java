package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCertificateAuthorityRequest {
    public CreateCertificateAuthorityHeaders headers;
    public CreateCertificateAuthorityRequest withHeaders(CreateCertificateAuthorityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCertificateAuthorityRequest request;
    public CreateCertificateAuthorityRequest withRequest(openapisdk.models.shared.CreateCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
}