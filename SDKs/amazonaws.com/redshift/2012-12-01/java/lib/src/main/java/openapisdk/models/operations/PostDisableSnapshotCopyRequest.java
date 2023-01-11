package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableSnapshotCopyRequest {
    public PostDisableSnapshotCopyQueryParams queryParams;
    public PostDisableSnapshotCopyRequest withQueryParams(PostDisableSnapshotCopyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableSnapshotCopyHeaders headers;
    public PostDisableSnapshotCopyRequest withHeaders(PostDisableSnapshotCopyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableSnapshotCopyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}