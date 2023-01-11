package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateGlobalReplicationGroupRequest {
    public PostCreateGlobalReplicationGroupQueryParams queryParams;
    public PostCreateGlobalReplicationGroupRequest withQueryParams(PostCreateGlobalReplicationGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateGlobalReplicationGroupHeaders headers;
    public PostCreateGlobalReplicationGroupRequest withHeaders(PostCreateGlobalReplicationGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateGlobalReplicationGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}