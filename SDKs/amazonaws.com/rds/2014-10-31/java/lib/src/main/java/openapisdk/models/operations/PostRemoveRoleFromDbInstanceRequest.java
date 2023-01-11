package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveRoleFromDbInstanceRequest {
    public PostRemoveRoleFromDbInstanceQueryParams queryParams;
    public PostRemoveRoleFromDbInstanceRequest withQueryParams(PostRemoveRoleFromDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRemoveRoleFromDbInstanceHeaders headers;
    public PostRemoveRoleFromDbInstanceRequest withHeaders(PostRemoveRoleFromDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRemoveRoleFromDbInstanceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}