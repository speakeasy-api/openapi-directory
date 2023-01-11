package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetDbClusterParameterGroupRequest {
    public PostResetDbClusterParameterGroupQueryParams queryParams;
    public PostResetDbClusterParameterGroupRequest withQueryParams(PostResetDbClusterParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResetDbClusterParameterGroupHeaders headers;
    public PostResetDbClusterParameterGroupRequest withHeaders(PostResetDbClusterParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResetDbClusterParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}