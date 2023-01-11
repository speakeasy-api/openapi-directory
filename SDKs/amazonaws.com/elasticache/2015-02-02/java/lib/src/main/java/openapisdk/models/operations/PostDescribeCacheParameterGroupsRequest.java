package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCacheParameterGroupsRequest {
    public PostDescribeCacheParameterGroupsQueryParams queryParams;
    public PostDescribeCacheParameterGroupsRequest withQueryParams(PostDescribeCacheParameterGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeCacheParameterGroupsHeaders headers;
    public PostDescribeCacheParameterGroupsRequest withHeaders(PostDescribeCacheParameterGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeCacheParameterGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}