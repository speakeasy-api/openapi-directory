package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteReplicationGroupRequest {
    public PostDeleteReplicationGroupQueryParams queryParams;
    public PostDeleteReplicationGroupRequest withQueryParams(PostDeleteReplicationGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteReplicationGroupHeaders headers;
    public PostDeleteReplicationGroupRequest withHeaders(PostDeleteReplicationGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteReplicationGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}