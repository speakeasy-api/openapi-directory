package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCertificateAuthoritiesRequest {
    public ListCertificateAuthoritiesQueryParams queryParams;
    public ListCertificateAuthoritiesRequest withQueryParams(ListCertificateAuthoritiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCertificateAuthoritiesHeaders headers;
    public ListCertificateAuthoritiesRequest withHeaders(ListCertificateAuthoritiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListCertificateAuthoritiesRequest request;
    public ListCertificateAuthoritiesRequest withRequest(openapisdk.models.shared.ListCertificateAuthoritiesRequest request) {
        this.request = request;
        return this;
    }
}