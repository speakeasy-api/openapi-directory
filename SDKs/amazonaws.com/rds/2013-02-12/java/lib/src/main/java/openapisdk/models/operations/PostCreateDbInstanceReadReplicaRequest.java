package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbInstanceReadReplicaRequest {
    public PostCreateDbInstanceReadReplicaQueryParams queryParams;
    public PostCreateDbInstanceReadReplicaRequest withQueryParams(PostCreateDbInstanceReadReplicaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDbInstanceReadReplicaHeaders headers;
    public PostCreateDbInstanceReadReplicaRequest withHeaders(PostCreateDbInstanceReadReplicaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDbInstanceReadReplicaRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}