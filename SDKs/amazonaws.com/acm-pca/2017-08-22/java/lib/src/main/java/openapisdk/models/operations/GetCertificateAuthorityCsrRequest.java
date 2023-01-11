package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificateAuthorityCsrRequest {
    public GetCertificateAuthorityCsrHeaders headers;
    public GetCertificateAuthorityCsrRequest withHeaders(GetCertificateAuthorityCsrHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCertificateAuthorityCsrRequest request;
    public GetCertificateAuthorityCsrRequest withRequest(openapisdk.models.shared.GetCertificateAuthorityCsrRequest request) {
        this.request = request;
        return this;
    }
}