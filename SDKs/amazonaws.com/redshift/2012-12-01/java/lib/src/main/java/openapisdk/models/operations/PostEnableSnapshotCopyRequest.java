package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableSnapshotCopyRequest {
    public PostEnableSnapshotCopyQueryParams queryParams;
    public PostEnableSnapshotCopyRequest withQueryParams(PostEnableSnapshotCopyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableSnapshotCopyHeaders headers;
    public PostEnableSnapshotCopyRequest withHeaders(PostEnableSnapshotCopyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableSnapshotCopyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}