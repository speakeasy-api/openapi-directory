package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveUserFromGroupRequest {
    public PostRemoveUserFromGroupQueryParams queryParams;
    public PostRemoveUserFromGroupRequest withQueryParams(PostRemoveUserFromGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRemoveUserFromGroupHeaders headers;
    public PostRemoveUserFromGroupRequest withHeaders(PostRemoveUserFromGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRemoveUserFromGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}