package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyClusterSnapshotRequest {
    public PostCopyClusterSnapshotQueryParams queryParams;
    public PostCopyClusterSnapshotRequest withQueryParams(PostCopyClusterSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCopyClusterSnapshotHeaders headers;
    public PostCopyClusterSnapshotRequest withHeaders(PostCopyClusterSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCopyClusterSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}