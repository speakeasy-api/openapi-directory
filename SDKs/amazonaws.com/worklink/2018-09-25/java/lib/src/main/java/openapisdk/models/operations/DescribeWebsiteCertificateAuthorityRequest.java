package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWebsiteCertificateAuthorityRequest {
    public DescribeWebsiteCertificateAuthorityHeaders headers;
    public DescribeWebsiteCertificateAuthorityRequest withHeaders(DescribeWebsiteCertificateAuthorityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeWebsiteCertificateAuthorityRequestBody request;
    public DescribeWebsiteCertificateAuthorityRequest withRequest(DescribeWebsiteCertificateAuthorityRequestBody request) {
        this.request = request;
        return this;
    }
}