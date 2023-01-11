package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPromoteReadReplicaRequest {
    public PostPromoteReadReplicaQueryParams queryParams;
    public PostPromoteReadReplicaRequest withQueryParams(PostPromoteReadReplicaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPromoteReadReplicaHeaders headers;
    public PostPromoteReadReplicaRequest withHeaders(PostPromoteReadReplicaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPromoteReadReplicaRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}