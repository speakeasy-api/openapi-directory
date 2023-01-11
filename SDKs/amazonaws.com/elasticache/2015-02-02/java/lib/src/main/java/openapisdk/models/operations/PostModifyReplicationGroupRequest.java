package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyReplicationGroupRequest {
    public PostModifyReplicationGroupQueryParams queryParams;
    public PostModifyReplicationGroupRequest withQueryParams(PostModifyReplicationGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyReplicationGroupHeaders headers;
    public PostModifyReplicationGroupRequest withHeaders(PostModifyReplicationGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyReplicationGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}