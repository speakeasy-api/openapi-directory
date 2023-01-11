package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyDbClusterParameterGroupRequest {
    public PostCopyDbClusterParameterGroupQueryParams queryParams;
    public PostCopyDbClusterParameterGroupRequest withQueryParams(PostCopyDbClusterParameterGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCopyDbClusterParameterGroupHeaders headers;
    public PostCopyDbClusterParameterGroupRequest withHeaders(PostCopyDbClusterParameterGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCopyDbClusterParameterGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}