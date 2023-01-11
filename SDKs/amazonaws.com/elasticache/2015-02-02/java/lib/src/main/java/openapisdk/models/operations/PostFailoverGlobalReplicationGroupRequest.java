package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFailoverGlobalReplicationGroupRequest {
    public PostFailoverGlobalReplicationGroupQueryParams queryParams;
    public PostFailoverGlobalReplicationGroupRequest withQueryParams(PostFailoverGlobalReplicationGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostFailoverGlobalReplicationGroupHeaders headers;
    public PostFailoverGlobalReplicationGroupRequest withHeaders(PostFailoverGlobalReplicationGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostFailoverGlobalReplicationGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}