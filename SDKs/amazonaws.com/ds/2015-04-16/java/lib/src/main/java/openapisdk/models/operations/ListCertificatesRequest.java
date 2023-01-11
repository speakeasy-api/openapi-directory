package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCertificatesRequest {
    public ListCertificatesHeaders headers;
    public ListCertificatesRequest withHeaders(ListCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCertificatesRequest request;
    public ListCertificatesRequest withRequest(openapisdk.models.shared.ListCertificatesRequest request) {
        this.request = request;
        return this;
    }
}