package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSnapshotRequest {
    public PostDeleteSnapshotQueryParams queryParams;
    public PostDeleteSnapshotRequest withQueryParams(PostDeleteSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteSnapshotHeaders headers;
    public PostDeleteSnapshotRequest withHeaders(PostDeleteSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}