package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCertificatesRequest {
    public PostDescribeCertificatesQueryParams queryParams;
    public PostDescribeCertificatesRequest withQueryParams(PostDescribeCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeCertificatesHeaders headers;
    public PostDescribeCertificatesRequest withHeaders(PostDescribeCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeCertificatesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}