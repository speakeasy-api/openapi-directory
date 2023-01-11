package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetDbParameterGroupRequest {
    public PostResetDbParameterGroupQueryParams queryParams;
    public PostResetDbParameterGroupRequest withQueryParams(PostResetDbParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResetDbParameterGroupHeaders headers;
    public PostResetDbParameterGroupRequest withHeaders(PostResetDbParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResetDbParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}