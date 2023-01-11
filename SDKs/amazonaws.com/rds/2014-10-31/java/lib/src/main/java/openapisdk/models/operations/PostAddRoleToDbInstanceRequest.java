package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddRoleToDbInstanceRequest {
    public PostAddRoleToDbInstanceQueryParams queryParams;
    public PostAddRoleToDbInstanceRequest withQueryParams(PostAddRoleToDbInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAddRoleToDbInstanceHeaders headers;
    public PostAddRoleToDbInstanceRequest withHeaders(PostAddRoleToDbInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAddRoleToDbInstanceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}