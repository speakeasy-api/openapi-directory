package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListServerCertificateTagsRequest {
    public PostListServerCertificateTagsQueryParams queryParams;
    public PostListServerCertificateTagsRequest withQueryParams(PostListServerCertificateTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListServerCertificateTagsHeaders headers;
    public PostListServerCertificateTagsRequest withHeaders(PostListServerCertificateTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListServerCertificateTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}