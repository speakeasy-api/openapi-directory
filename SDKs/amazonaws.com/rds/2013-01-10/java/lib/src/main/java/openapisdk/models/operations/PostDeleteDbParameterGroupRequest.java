package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbParameterGroupRequest {
    public PostDeleteDbParameterGroupQueryParams queryParams;
    public PostDeleteDbParameterGroupRequest withQueryParams(PostDeleteDbParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDbParameterGroupHeaders headers;
    public PostDeleteDbParameterGroupRequest withHeaders(PostDeleteDbParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDbParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}