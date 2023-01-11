package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCacheParametersRequest {
    public PostDescribeCacheParametersQueryParams queryParams;
    public PostDescribeCacheParametersRequest withQueryParams(PostDescribeCacheParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeCacheParametersHeaders headers;
    public PostDescribeCacheParametersRequest withHeaders(PostDescribeCacheParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeCacheParametersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}