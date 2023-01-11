package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDecreaseNodeGroupsInGlobalReplicationGroupRequest {
    public PostDecreaseNodeGroupsInGlobalReplicationGroupQueryParams queryParams;
    public PostDecreaseNodeGroupsInGlobalReplicationGroupRequest withQueryParams(PostDecreaseNodeGroupsInGlobalReplicationGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDecreaseNodeGroupsInGlobalReplicationGroupHeaders headers;
    public PostDecreaseNodeGroupsInGlobalReplicationGroupRequest withHeaders(PostDecreaseNodeGroupsInGlobalReplicationGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDecreaseNodeGroupsInGlobalReplicationGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}