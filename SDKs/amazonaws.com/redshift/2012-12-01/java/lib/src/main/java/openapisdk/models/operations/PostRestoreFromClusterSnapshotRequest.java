package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreFromClusterSnapshotRequest {
    public PostRestoreFromClusterSnapshotQueryParams queryParams;
    public PostRestoreFromClusterSnapshotRequest withQueryParams(PostRestoreFromClusterSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRestoreFromClusterSnapshotHeaders headers;
    public PostRestoreFromClusterSnapshotRequest withHeaders(PostRestoreFromClusterSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRestoreFromClusterSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}