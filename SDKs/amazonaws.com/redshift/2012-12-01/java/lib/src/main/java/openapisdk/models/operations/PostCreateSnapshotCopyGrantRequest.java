package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSnapshotCopyGrantRequest {
    public PostCreateSnapshotCopyGrantQueryParams queryParams;
    public PostCreateSnapshotCopyGrantRequest withQueryParams(PostCreateSnapshotCopyGrantQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateSnapshotCopyGrantHeaders headers;
    public PostCreateSnapshotCopyGrantRequest withHeaders(PostCreateSnapshotCopyGrantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateSnapshotCopyGrantRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}