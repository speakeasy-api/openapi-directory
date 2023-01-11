package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCertificateAuthorityRequest {
    public DescribeCertificateAuthorityHeaders headers;
    public DescribeCertificateAuthorityRequest withHeaders(DescribeCertificateAuthorityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCertificateAuthorityRequest request;
    public DescribeCertificateAuthorityRequest withRequest(openapisdk.models.shared.DescribeCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
}