package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreTableFromClusterSnapshotRequest {
    public PostRestoreTableFromClusterSnapshotQueryParams queryParams;
    public PostRestoreTableFromClusterSnapshotRequest withQueryParams(PostRestoreTableFromClusterSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRestoreTableFromClusterSnapshotHeaders headers;
    public PostRestoreTableFromClusterSnapshotRequest withHeaders(PostRestoreTableFromClusterSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRestoreTableFromClusterSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}