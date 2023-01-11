package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRebalanceSlotsInGlobalReplicationGroupRequest {
    public PostRebalanceSlotsInGlobalReplicationGroupQueryParams queryParams;
    public PostRebalanceSlotsInGlobalReplicationGroupRequest withQueryParams(PostRebalanceSlotsInGlobalReplicationGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRebalanceSlotsInGlobalReplicationGroupHeaders headers;
    public PostRebalanceSlotsInGlobalReplicationGroupRequest withHeaders(PostRebalanceSlotsInGlobalReplicationGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRebalanceSlotsInGlobalReplicationGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}