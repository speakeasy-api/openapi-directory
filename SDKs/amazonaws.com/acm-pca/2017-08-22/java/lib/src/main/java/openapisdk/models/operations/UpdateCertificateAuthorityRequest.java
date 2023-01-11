package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCertificateAuthorityRequest {
    public UpdateCertificateAuthorityHeaders headers;
    public UpdateCertificateAuthorityRequest withHeaders(UpdateCertificateAuthorityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCertificateAuthorityRequest request;
    public UpdateCertificateAuthorityRequest withRequest(openapisdk.models.shared.UpdateCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
}