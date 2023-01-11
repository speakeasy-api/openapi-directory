package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbClusterParameterGroupRequest {
    public PostDeleteDbClusterParameterGroupQueryParams queryParams;
    public PostDeleteDbClusterParameterGroupRequest withQueryParams(PostDeleteDbClusterParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDbClusterParameterGroupHeaders headers;
    public PostDeleteDbClusterParameterGroupRequest withHeaders(PostDeleteDbClusterParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDbClusterParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}