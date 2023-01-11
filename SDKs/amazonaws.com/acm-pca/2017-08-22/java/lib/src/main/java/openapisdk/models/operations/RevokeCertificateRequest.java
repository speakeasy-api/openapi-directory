package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RevokeCertificateRequest {
    public RevokeCertificateHeaders headers;
    public RevokeCertificateRequest withHeaders(RevokeCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RevokeCertificateRequest request;
    public RevokeCertificateRequest withRequest(openapisdk.models.shared.RevokeCertificateRequest request) {
        this.request = request;
        return this;
    }
}