package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyDbClusterSnapshotRequest {
    public PostCopyDbClusterSnapshotQueryParams queryParams;
    public PostCopyDbClusterSnapshotRequest withQueryParams(PostCopyDbClusterSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCopyDbClusterSnapshotHeaders headers;
    public PostCopyDbClusterSnapshotRequest withHeaders(PostCopyDbClusterSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCopyDbClusterSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}