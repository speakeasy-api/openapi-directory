package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbSnapshotRequest {
    public PostModifyDbSnapshotQueryParams queryParams;
    public PostModifyDbSnapshotRequest withQueryParams(PostModifyDbSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDbSnapshotHeaders headers;
    public PostModifyDbSnapshotRequest withHeaders(PostModifyDbSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDbSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}