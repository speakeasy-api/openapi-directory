package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeSnapshotAccessRequest {
    public PostAuthorizeSnapshotAccessQueryParams queryParams;
    public PostAuthorizeSnapshotAccessRequest withQueryParams(PostAuthorizeSnapshotAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAuthorizeSnapshotAccessHeaders headers;
    public PostAuthorizeSnapshotAccessRequest withHeaders(PostAuthorizeSnapshotAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAuthorizeSnapshotAccessRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}