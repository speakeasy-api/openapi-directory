package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCertificateRequest {
    public DescribeCertificateHeaders headers;
    public DescribeCertificateRequest withHeaders(DescribeCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCertificateRequest request;
    public DescribeCertificateRequest withRequest(openapisdk.models.shared.DescribeCertificateRequest request) {
        this.request = request;
        return this;
    }
}