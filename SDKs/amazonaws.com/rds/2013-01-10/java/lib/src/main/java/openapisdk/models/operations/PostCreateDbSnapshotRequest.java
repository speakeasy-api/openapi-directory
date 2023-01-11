package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbSnapshotRequest {
    public PostCreateDbSnapshotQueryParams queryParams;
    public PostCreateDbSnapshotRequest withQueryParams(PostCreateDbSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDbSnapshotHeaders headers;
    public PostCreateDbSnapshotRequest withHeaders(PostCreateDbSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDbSnapshotRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}