package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddRoleToDbClusterRequest {
    public PostAddRoleToDbClusterQueryParams queryParams;
    public PostAddRoleToDbClusterRequest withQueryParams(PostAddRoleToDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAddRoleToDbClusterHeaders headers;
    public PostAddRoleToDbClusterRequest withHeaders(PostAddRoleToDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAddRoleToDbClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}