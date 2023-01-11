package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificatePdfRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CertificateRequest request;
    public GetCertificatePdfRequest withRequest(openapisdk.models.shared.CertificateRequest request) {
        this.request = request;
        return this;
    }
    public GetCertificatePdfSecurity security;
    public GetCertificatePdfRequest withSecurity(GetCertificatePdfSecurity security) {
        this.security = security;
        return this;
    }
}