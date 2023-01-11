package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteGlobalReplicationGroupRequest {
    public PostDeleteGlobalReplicationGroupQueryParams queryParams;
    public PostDeleteGlobalReplicationGroupRequest withQueryParams(PostDeleteGlobalReplicationGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteGlobalReplicationGroupHeaders headers;
    public PostDeleteGlobalReplicationGroupRequest withHeaders(PostDeleteGlobalReplicationGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteGlobalReplicationGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}