package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCacheSubnetGroupRequest {
    public PostDeleteCacheSubnetGroupQueryParams queryParams;
    public PostDeleteCacheSubnetGroupRequest withQueryParams(PostDeleteCacheSubnetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteCacheSubnetGroupHeaders headers;
    public PostDeleteCacheSubnetGroupRequest withHeaders(PostDeleteCacheSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteCacheSubnetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}