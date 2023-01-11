package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCertificateOptionsRequest {
    public UpdateCertificateOptionsHeaders headers;
    public UpdateCertificateOptionsRequest withHeaders(UpdateCertificateOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCertificateOptionsRequest request;
    public UpdateCertificateOptionsRequest withRequest(openapisdk.models.shared.UpdateCertificateOptionsRequest request) {
        this.request = request;
        return this;
    }
}