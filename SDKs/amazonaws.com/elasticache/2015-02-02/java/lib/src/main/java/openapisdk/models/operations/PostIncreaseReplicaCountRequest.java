package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostIncreaseReplicaCountRequest {
    public PostIncreaseReplicaCountQueryParams queryParams;
    public PostIncreaseReplicaCountRequest withQueryParams(PostIncreaseReplicaCountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostIncreaseReplicaCountHeaders headers;
    public PostIncreaseReplicaCountRequest withHeaders(PostIncreaseReplicaCountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostIncreaseReplicaCountRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}