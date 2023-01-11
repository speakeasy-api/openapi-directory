package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbParameterGroupRequest {
    public PostCreateDbParameterGroupQueryParams queryParams;
    public PostCreateDbParameterGroupRequest withQueryParams(PostCreateDbParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDbParameterGroupHeaders headers;
    public PostCreateDbParameterGroupRequest withHeaders(PostCreateDbParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDbParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}