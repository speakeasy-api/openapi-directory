package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClusterSnapshotRequest {
    public PostDeleteClusterSnapshotQueryParams queryParams;
    public PostDeleteClusterSnapshotRequest withQueryParams(PostDeleteClusterSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteClusterSnapshotHeaders headers;
    public PostDeleteClusterSnapshotRequest withHeaders(PostDeleteClusterSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteClusterSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}