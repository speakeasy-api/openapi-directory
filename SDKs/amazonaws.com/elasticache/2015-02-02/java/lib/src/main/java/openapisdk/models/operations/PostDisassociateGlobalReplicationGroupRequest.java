package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateGlobalReplicationGroupRequest {
    public PostDisassociateGlobalReplicationGroupQueryParams queryParams;
    public PostDisassociateGlobalReplicationGroupRequest withQueryParams(PostDisassociateGlobalReplicationGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateGlobalReplicationGroupHeaders headers;
    public PostDisassociateGlobalReplicationGroupRequest withHeaders(PostDisassociateGlobalReplicationGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateGlobalReplicationGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}