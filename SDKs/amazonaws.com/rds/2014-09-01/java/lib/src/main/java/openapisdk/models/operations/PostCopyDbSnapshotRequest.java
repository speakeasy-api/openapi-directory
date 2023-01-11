package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyDbSnapshotRequest {
    public PostCopyDbSnapshotQueryParams queryParams;
    public PostCopyDbSnapshotRequest withQueryParams(PostCopyDbSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCopyDbSnapshotHeaders headers;
    public PostCopyDbSnapshotRequest withHeaders(PostCopyDbSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCopyDbSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}