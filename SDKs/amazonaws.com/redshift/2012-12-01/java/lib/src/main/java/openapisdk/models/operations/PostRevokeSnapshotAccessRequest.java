package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeSnapshotAccessRequest {
    public PostRevokeSnapshotAccessQueryParams queryParams;
    public PostRevokeSnapshotAccessRequest withQueryParams(PostRevokeSnapshotAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRevokeSnapshotAccessHeaders headers;
    public PostRevokeSnapshotAccessRequest withHeaders(PostRevokeSnapshotAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRevokeSnapshotAccessRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}