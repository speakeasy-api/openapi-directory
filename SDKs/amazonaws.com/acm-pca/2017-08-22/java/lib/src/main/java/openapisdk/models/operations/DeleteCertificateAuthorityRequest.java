package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCertificateAuthorityRequest {
    public DeleteCertificateAuthorityHeaders headers;
    public DeleteCertificateAuthorityRequest withHeaders(DeleteCertificateAuthorityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCertificateAuthorityRequest request;
    public DeleteCertificateAuthorityRequest withRequest(openapisdk.models.shared.DeleteCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
}