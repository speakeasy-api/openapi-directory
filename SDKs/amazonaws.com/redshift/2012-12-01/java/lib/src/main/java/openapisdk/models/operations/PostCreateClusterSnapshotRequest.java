package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClusterSnapshotRequest {
    public PostCreateClusterSnapshotQueryParams queryParams;
    public PostCreateClusterSnapshotRequest withQueryParams(PostCreateClusterSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateClusterSnapshotHeaders headers;
    public PostCreateClusterSnapshotRequest withHeaders(PostCreateClusterSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateClusterSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}