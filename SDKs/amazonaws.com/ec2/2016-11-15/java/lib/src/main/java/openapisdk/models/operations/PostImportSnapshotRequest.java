package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportSnapshotRequest {
    public PostImportSnapshotQueryParams queryParams;
    public PostImportSnapshotRequest withQueryParams(PostImportSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostImportSnapshotHeaders headers;
    public PostImportSnapshotRequest withHeaders(PostImportSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostImportSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}