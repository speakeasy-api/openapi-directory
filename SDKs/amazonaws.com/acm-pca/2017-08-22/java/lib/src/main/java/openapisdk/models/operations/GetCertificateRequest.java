package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificateRequest {
    public GetCertificateHeaders headers;
    public GetCertificateRequest withHeaders(GetCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCertificateRequest request;
    public GetCertificateRequest withRequest(openapisdk.models.shared.GetCertificateRequest request) {
        this.request = request;
        return this;
    }
}