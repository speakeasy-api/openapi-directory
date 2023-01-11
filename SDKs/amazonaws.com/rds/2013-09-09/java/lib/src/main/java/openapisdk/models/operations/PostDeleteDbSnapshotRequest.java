package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbSnapshotRequest {
    public PostDeleteDbSnapshotQueryParams queryParams;
    public PostDeleteDbSnapshotRequest withQueryParams(PostDeleteDbSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDbSnapshotHeaders headers;
    public PostDeleteDbSnapshotRequest withHeaders(PostDeleteDbSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDbSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}