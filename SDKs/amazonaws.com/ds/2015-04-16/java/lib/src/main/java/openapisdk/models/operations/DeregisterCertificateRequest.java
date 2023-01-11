package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterCertificateRequest {
    public DeregisterCertificateHeaders headers;
    public DeregisterCertificateRequest withHeaders(DeregisterCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterCertificateRequest request;
    public DeregisterCertificateRequest withRequest(openapisdk.models.shared.DeregisterCertificateRequest request) {
        this.request = request;
        return this;
    }
}