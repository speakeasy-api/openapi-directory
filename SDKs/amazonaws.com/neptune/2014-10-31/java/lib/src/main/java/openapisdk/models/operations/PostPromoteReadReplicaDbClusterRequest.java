package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPromoteReadReplicaDbClusterRequest {
    public PostPromoteReadReplicaDbClusterQueryParams queryParams;
    public PostPromoteReadReplicaDbClusterRequest withQueryParams(PostPromoteReadReplicaDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPromoteReadReplicaDbClusterHeaders headers;
    public PostPromoteReadReplicaDbClusterRequest withHeaders(PostPromoteReadReplicaDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPromoteReadReplicaDbClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}