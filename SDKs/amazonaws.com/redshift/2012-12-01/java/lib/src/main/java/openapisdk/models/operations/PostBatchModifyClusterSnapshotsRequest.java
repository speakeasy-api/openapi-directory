package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchModifyClusterSnapshotsRequest {
    public PostBatchModifyClusterSnapshotsQueryParams queryParams;
    public PostBatchModifyClusterSnapshotsRequest withQueryParams(PostBatchModifyClusterSnapshotsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostBatchModifyClusterSnapshotsHeaders headers;
    public PostBatchModifyClusterSnapshotsRequest withHeaders(PostBatchModifyClusterSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostBatchModifyClusterSnapshotsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}