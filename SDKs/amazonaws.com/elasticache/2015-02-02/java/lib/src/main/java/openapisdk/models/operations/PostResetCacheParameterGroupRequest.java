package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetCacheParameterGroupRequest {
    public PostResetCacheParameterGroupQueryParams queryParams;
    public PostResetCacheParameterGroupRequest withQueryParams(PostResetCacheParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResetCacheParameterGroupHeaders headers;
    public PostResetCacheParameterGroupRequest withHeaders(PostResetCacheParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResetCacheParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}