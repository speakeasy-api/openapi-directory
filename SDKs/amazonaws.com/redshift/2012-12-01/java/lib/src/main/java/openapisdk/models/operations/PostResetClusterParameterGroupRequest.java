package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetClusterParameterGroupRequest {
    public PostResetClusterParameterGroupQueryParams queryParams;
    public PostResetClusterParameterGroupRequest withQueryParams(PostResetClusterParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResetClusterParameterGroupHeaders headers;
    public PostResetClusterParameterGroupRequest withHeaders(PostResetClusterParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResetClusterParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}