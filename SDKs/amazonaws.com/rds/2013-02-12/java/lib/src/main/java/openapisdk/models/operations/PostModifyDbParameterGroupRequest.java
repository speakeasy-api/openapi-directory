package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbParameterGroupRequest {
    public PostModifyDbParameterGroupQueryParams queryParams;
    public PostModifyDbParameterGroupRequest withQueryParams(PostModifyDbParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDbParameterGroupHeaders headers;
    public PostModifyDbParameterGroupRequest withHeaders(PostModifyDbParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDbParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}