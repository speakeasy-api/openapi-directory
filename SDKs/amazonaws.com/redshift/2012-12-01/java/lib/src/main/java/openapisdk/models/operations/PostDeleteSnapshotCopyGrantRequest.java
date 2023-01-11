package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSnapshotCopyGrantRequest {
    public PostDeleteSnapshotCopyGrantQueryParams queryParams;
    public PostDeleteSnapshotCopyGrantRequest withQueryParams(PostDeleteSnapshotCopyGrantQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteSnapshotCopyGrantHeaders headers;
    public PostDeleteSnapshotCopyGrantRequest withHeaders(PostDeleteSnapshotCopyGrantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteSnapshotCopyGrantRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}