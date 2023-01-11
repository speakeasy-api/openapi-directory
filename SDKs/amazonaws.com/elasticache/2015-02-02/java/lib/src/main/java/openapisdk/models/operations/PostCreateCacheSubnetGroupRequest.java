package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCacheSubnetGroupRequest {
    public PostCreateCacheSubnetGroupQueryParams queryParams;
    public PostCreateCacheSubnetGroupRequest withQueryParams(PostCreateCacheSubnetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateCacheSubnetGroupHeaders headers;
    public PostCreateCacheSubnetGroupRequest withHeaders(PostCreateCacheSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateCacheSubnetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}