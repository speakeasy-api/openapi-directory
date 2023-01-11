package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RequestCertificateRequest {
    public RequestCertificateHeaders headers;
    public RequestCertificateRequest withHeaders(RequestCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RequestCertificateRequest request;
    public RequestCertificateRequest withRequest(openapisdk.models.shared.RequestCertificateRequest request) {
        this.request = request;
        return this;
    }
}