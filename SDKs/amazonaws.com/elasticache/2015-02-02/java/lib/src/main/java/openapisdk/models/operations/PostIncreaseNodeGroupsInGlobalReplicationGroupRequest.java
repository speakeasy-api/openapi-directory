package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostIncreaseNodeGroupsInGlobalReplicationGroupRequest {
    public PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams queryParams;
    public PostIncreaseNodeGroupsInGlobalReplicationGroupRequest withQueryParams(PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders headers;
    public PostIncreaseNodeGroupsInGlobalReplicationGroupRequest withHeaders(PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostIncreaseNodeGroupsInGlobalReplicationGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}