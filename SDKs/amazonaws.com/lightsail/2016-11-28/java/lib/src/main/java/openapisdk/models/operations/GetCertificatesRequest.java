package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificatesRequest {
    public GetCertificatesHeaders headers;
    public GetCertificatesRequest withHeaders(GetCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCertificatesRequest request;
    public GetCertificatesRequest withRequest(openapisdk.models.shared.GetCertificatesRequest request) {
        this.request = request;
        return this;
    }
}