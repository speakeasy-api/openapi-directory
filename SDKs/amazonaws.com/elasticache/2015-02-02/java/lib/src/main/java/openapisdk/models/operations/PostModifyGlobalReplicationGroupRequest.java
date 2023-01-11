package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyGlobalReplicationGroupRequest {
    public PostModifyGlobalReplicationGroupQueryParams queryParams;
    public PostModifyGlobalReplicationGroupRequest withQueryParams(PostModifyGlobalReplicationGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyGlobalReplicationGroupHeaders headers;
    public PostModifyGlobalReplicationGroupRequest withHeaders(PostModifyGlobalReplicationGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyGlobalReplicationGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}