package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSigningCertificateRequest {
    public GetSigningCertificateHeaders headers;
    public GetSigningCertificateRequest withHeaders(GetSigningCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSigningCertificateRequest request;
    public GetSigningCertificateRequest withRequest(openapisdk.models.shared.GetSigningCertificateRequest request) {
        this.request = request;
        return this;
    }
}