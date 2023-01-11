package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbClusterParameterGroupRequest {
    public PostModifyDbClusterParameterGroupQueryParams queryParams;
    public PostModifyDbClusterParameterGroupRequest withQueryParams(PostModifyDbClusterParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDbClusterParameterGroupHeaders headers;
    public PostModifyDbClusterParameterGroupRequest withHeaders(PostModifyDbClusterParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDbClusterParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}