package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssueCertificateRequest {
    public IssueCertificateHeaders headers;
    public IssueCertificateRequest withHeaders(IssueCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IssueCertificateRequest request;
    public IssueCertificateRequest withRequest(openapisdk.models.shared.IssueCertificateRequest request) {
        this.request = request;
        return this;
    }
}