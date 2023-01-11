package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClusterParameterGroupRequest {
    public PostCreateClusterParameterGroupQueryParams queryParams;
    public PostCreateClusterParameterGroupRequest withQueryParams(PostCreateClusterParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateClusterParameterGroupHeaders headers;
    public PostCreateClusterParameterGroupRequest withHeaders(PostCreateClusterParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateClusterParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}