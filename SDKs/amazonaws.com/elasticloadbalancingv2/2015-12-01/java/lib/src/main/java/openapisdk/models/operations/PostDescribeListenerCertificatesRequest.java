package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeListenerCertificatesRequest {
    public PostDescribeListenerCertificatesQueryParams queryParams;
    public PostDescribeListenerCertificatesRequest withQueryParams(PostDescribeListenerCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeListenerCertificatesHeaders headers;
    public PostDescribeListenerCertificatesRequest withHeaders(PostDescribeListenerCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeListenerCertificatesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}