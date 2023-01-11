package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCacheClustersRequest {
    public PostDescribeCacheClustersQueryParams queryParams;
    public PostDescribeCacheClustersRequest withQueryParams(PostDescribeCacheClustersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeCacheClustersHeaders headers;
    public PostDescribeCacheClustersRequest withHeaders(PostDescribeCacheClustersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeCacheClustersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}