package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RenewCertificateRequest {
    public RenewCertificateHeaders headers;
    public RenewCertificateRequest withHeaders(RenewCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RenewCertificateRequest request;
    public RenewCertificateRequest withRequest(openapisdk.models.shared.RenewCertificateRequest request) {
        this.request = request;
        return this;
    }
}