package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificateAuthorityCertificateRequest {
    public GetCertificateAuthorityCertificateHeaders headers;
    public GetCertificateAuthorityCertificateRequest withHeaders(GetCertificateAuthorityCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCertificateAuthorityCertificateRequest request;
    public GetCertificateAuthorityCertificateRequest withRequest(openapisdk.models.shared.GetCertificateAuthorityCertificateRequest request) {
        this.request = request;
        return this;
    }
}