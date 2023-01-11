package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSnapshotRequest {
    public PostCreateSnapshotQueryParams queryParams;
    public PostCreateSnapshotRequest withQueryParams(PostCreateSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateSnapshotHeaders headers;
    public PostCreateSnapshotRequest withHeaders(PostCreateSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}