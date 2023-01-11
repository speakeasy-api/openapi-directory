package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbClusterParameterGroupRequest {
    public PostCreateDbClusterParameterGroupQueryParams queryParams;
    public PostCreateDbClusterParameterGroupRequest withQueryParams(PostCreateDbClusterParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDbClusterParameterGroupHeaders headers;
    public PostCreateDbClusterParameterGroupRequest withHeaders(PostCreateDbClusterParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDbClusterParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}