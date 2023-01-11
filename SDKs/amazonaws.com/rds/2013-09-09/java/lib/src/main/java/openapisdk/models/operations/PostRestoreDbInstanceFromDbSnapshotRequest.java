package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreDbInstanceFromDbSnapshotRequest {
    public PostRestoreDbInstanceFromDbSnapshotQueryParams queryParams;
    public PostRestoreDbInstanceFromDbSnapshotRequest withQueryParams(PostRestoreDbInstanceFromDbSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRestoreDbInstanceFromDbSnapshotHeaders headers;
    public PostRestoreDbInstanceFromDbSnapshotRequest withHeaders(PostRestoreDbInstanceFromDbSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRestoreDbInstanceFromDbSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}