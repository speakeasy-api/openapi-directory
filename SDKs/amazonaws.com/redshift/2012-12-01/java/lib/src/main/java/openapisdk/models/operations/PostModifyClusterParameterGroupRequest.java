package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterParameterGroupRequest {
    public PostModifyClusterParameterGroupQueryParams queryParams;
    public PostModifyClusterParameterGroupRequest withQueryParams(PostModifyClusterParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyClusterParameterGroupHeaders headers;
    public PostModifyClusterParameterGroupRequest withHeaders(PostModifyClusterParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyClusterParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}