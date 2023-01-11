package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableFastSnapshotRestoresRequest {
    public PostEnableFastSnapshotRestoresQueryParams queryParams;
    public PostEnableFastSnapshotRestoresRequest withQueryParams(PostEnableFastSnapshotRestoresQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableFastSnapshotRestoresHeaders headers;
    public PostEnableFastSnapshotRestoresRequest withHeaders(PostEnableFastSnapshotRestoresHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableFastSnapshotRestoresRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}