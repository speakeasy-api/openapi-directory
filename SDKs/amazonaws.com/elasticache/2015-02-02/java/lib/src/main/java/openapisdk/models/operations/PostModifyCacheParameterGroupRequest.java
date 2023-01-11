package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyCacheParameterGroupRequest {
    public PostModifyCacheParameterGroupQueryParams queryParams;
    public PostModifyCacheParameterGroupRequest withQueryParams(PostModifyCacheParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyCacheParameterGroupHeaders headers;
    public PostModifyCacheParameterGroupRequest withHeaders(PostModifyCacheParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyCacheParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}