package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopySnapshotRequest {
    public PostCopySnapshotQueryParams queryParams;
    public PostCopySnapshotRequest withQueryParams(PostCopySnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCopySnapshotHeaders headers;
    public PostCopySnapshotRequest withHeaders(PostCopySnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCopySnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}