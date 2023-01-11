package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCertificateRequest {
    public DeleteCertificateHeaders headers;
    public DeleteCertificateRequest withHeaders(DeleteCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCertificateMessage request;
    public DeleteCertificateRequest withRequest(openapisdk.models.shared.DeleteCertificateMessage request) {
        this.request = request;
        return this;
    }
}