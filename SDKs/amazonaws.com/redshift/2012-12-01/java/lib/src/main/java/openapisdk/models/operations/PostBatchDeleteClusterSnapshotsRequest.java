package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchDeleteClusterSnapshotsRequest {
    public PostBatchDeleteClusterSnapshotsQueryParams queryParams;
    public PostBatchDeleteClusterSnapshotsRequest withQueryParams(PostBatchDeleteClusterSnapshotsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostBatchDeleteClusterSnapshotsHeaders headers;
    public PostBatchDeleteClusterSnapshotsRequest withHeaders(PostBatchDeleteClusterSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostBatchDeleteClusterSnapshotsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}