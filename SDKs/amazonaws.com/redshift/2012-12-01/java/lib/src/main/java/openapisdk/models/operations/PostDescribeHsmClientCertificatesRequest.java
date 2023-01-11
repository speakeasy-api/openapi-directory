package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeHsmClientCertificatesRequest {
    public PostDescribeHsmClientCertificatesQueryParams queryParams;
    public PostDescribeHsmClientCertificatesRequest withQueryParams(PostDescribeHsmClientCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeHsmClientCertificatesHeaders headers;
    public PostDescribeHsmClientCertificatesRequest withHeaders(PostDescribeHsmClientCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeHsmClientCertificatesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}