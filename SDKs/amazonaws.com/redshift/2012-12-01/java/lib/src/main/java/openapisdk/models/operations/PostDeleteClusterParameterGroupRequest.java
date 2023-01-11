package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClusterParameterGroupRequest {
    public PostDeleteClusterParameterGroupQueryParams queryParams;
    public PostDeleteClusterParameterGroupRequest withQueryParams(PostDeleteClusterParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteClusterParameterGroupHeaders headers;
    public PostDeleteClusterParameterGroupRequest withHeaders(PostDeleteClusterParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteClusterParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}