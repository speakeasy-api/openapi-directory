package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyCertificatesRequest {
    public PostModifyCertificatesQueryParams queryParams;
    public PostModifyCertificatesRequest withQueryParams(PostModifyCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyCertificatesHeaders headers;
    public PostModifyCertificatesRequest withHeaders(PostModifyCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyCertificatesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}