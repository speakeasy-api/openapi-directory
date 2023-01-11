package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCacheParameterGroupRequest {
    public PostDeleteCacheParameterGroupQueryParams queryParams;
    public PostDeleteCacheParameterGroupRequest withQueryParams(PostDeleteCacheParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteCacheParameterGroupHeaders headers;
    public PostDeleteCacheParameterGroupRequest withHeaders(PostDeleteCacheParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteCacheParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}