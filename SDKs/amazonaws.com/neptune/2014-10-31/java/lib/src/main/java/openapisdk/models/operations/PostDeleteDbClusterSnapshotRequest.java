package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbClusterSnapshotRequest {
    public PostDeleteDbClusterSnapshotQueryParams queryParams;
    public PostDeleteDbClusterSnapshotRequest withQueryParams(PostDeleteDbClusterSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDbClusterSnapshotHeaders headers;
    public PostDeleteDbClusterSnapshotRequest withHeaders(PostDeleteDbClusterSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDbClusterSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}