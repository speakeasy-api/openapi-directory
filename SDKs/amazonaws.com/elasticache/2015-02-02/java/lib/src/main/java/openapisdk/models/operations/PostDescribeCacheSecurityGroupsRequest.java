package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCacheSecurityGroupsRequest {
    public PostDescribeCacheSecurityGroupsQueryParams queryParams;
    public PostDescribeCacheSecurityGroupsRequest withQueryParams(PostDescribeCacheSecurityGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeCacheSecurityGroupsHeaders headers;
    public PostDescribeCacheSecurityGroupsRequest withHeaders(PostDescribeCacheSecurityGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeCacheSecurityGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}