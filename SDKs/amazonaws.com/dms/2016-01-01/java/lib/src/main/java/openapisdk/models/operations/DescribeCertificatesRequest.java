package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCertificatesRequest {
    public DescribeCertificatesQueryParams queryParams;
    public DescribeCertificatesRequest withQueryParams(DescribeCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeCertificatesHeaders headers;
    public DescribeCertificatesRequest withHeaders(DescribeCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCertificatesMessage request;
    public DescribeCertificatesRequest withRequest(openapisdk.models.shared.DescribeCertificatesMessage request) {
        this.request = request;
        return this;
    }
}