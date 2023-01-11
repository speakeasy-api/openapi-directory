package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCacheParameterGroupRequest {
    public PostCreateCacheParameterGroupQueryParams queryParams;
    public PostCreateCacheParameterGroupRequest withQueryParams(PostCreateCacheParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateCacheParameterGroupHeaders headers;
    public PostCreateCacheParameterGroupRequest withHeaders(PostCreateCacheParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateCacheParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}