package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreDbClusterFromSnapshotRequest {
    public PostRestoreDbClusterFromSnapshotQueryParams queryParams;
    public PostRestoreDbClusterFromSnapshotRequest withQueryParams(PostRestoreDbClusterFromSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRestoreDbClusterFromSnapshotHeaders headers;
    public PostRestoreDbClusterFromSnapshotRequest withHeaders(PostRestoreDbClusterFromSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRestoreDbClusterFromSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}