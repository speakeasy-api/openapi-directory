package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterSnapshotRequest {
    public PostModifyClusterSnapshotQueryParams queryParams;
    public PostModifyClusterSnapshotRequest withQueryParams(PostModifyClusterSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyClusterSnapshotHeaders headers;
    public PostModifyClusterSnapshotRequest withHeaders(PostModifyClusterSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyClusterSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}