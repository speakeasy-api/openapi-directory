package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyDbParameterGroupRequest {
    public PostCopyDbParameterGroupQueryParams queryParams;
    public PostCopyDbParameterGroupRequest withQueryParams(PostCopyDbParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCopyDbParameterGroupHeaders headers;
    public PostCopyDbParameterGroupRequest withHeaders(PostCopyDbParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCopyDbParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}