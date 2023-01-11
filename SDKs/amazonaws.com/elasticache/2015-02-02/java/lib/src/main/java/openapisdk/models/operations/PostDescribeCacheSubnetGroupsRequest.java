package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCacheSubnetGroupsRequest {
    public PostDescribeCacheSubnetGroupsQueryParams queryParams;
    public PostDescribeCacheSubnetGroupsRequest withQueryParams(PostDescribeCacheSubnetGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeCacheSubnetGroupsHeaders headers;
    public PostDescribeCacheSubnetGroupsRequest withHeaders(PostDescribeCacheSubnetGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeCacheSubnetGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}