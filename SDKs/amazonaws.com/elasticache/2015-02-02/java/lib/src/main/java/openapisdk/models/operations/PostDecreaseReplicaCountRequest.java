package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDecreaseReplicaCountRequest {
    public PostDecreaseReplicaCountQueryParams queryParams;
    public PostDecreaseReplicaCountRequest withQueryParams(PostDecreaseReplicaCountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDecreaseReplicaCountHeaders headers;
    public PostDecreaseReplicaCountRequest withHeaders(PostDecreaseReplicaCountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDecreaseReplicaCountRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}