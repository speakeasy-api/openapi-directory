package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateReplicationGroupRequest {
    public PostCreateReplicationGroupQueryParams queryParams;
    public PostCreateReplicationGroupRequest withQueryParams(PostCreateReplicationGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateReplicationGroupHeaders headers;
    public PostCreateReplicationGroupRequest withHeaders(PostCreateReplicationGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateReplicationGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}