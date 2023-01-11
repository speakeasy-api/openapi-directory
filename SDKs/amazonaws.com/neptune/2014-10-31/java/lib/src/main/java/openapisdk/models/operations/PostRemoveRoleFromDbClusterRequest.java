package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveRoleFromDbClusterRequest {
    public PostRemoveRoleFromDbClusterQueryParams queryParams;
    public PostRemoveRoleFromDbClusterRequest withQueryParams(PostRemoveRoleFromDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRemoveRoleFromDbClusterHeaders headers;
    public PostRemoveRoleFromDbClusterRequest withHeaders(PostRemoveRoleFromDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRemoveRoleFromDbClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}