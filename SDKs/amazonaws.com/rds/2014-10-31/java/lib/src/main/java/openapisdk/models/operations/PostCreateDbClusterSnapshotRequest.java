package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbClusterSnapshotRequest {
    public PostCreateDbClusterSnapshotQueryParams queryParams;
    public PostCreateDbClusterSnapshotRequest withQueryParams(PostCreateDbClusterSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDbClusterSnapshotHeaders headers;
    public PostCreateDbClusterSnapshotRequest withHeaders(PostCreateDbClusterSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDbClusterSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}