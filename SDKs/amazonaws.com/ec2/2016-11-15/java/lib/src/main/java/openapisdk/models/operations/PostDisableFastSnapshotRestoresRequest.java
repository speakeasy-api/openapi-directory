package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableFastSnapshotRestoresRequest {
    public PostDisableFastSnapshotRestoresQueryParams queryParams;
    public PostDisableFastSnapshotRestoresRequest withQueryParams(PostDisableFastSnapshotRestoresQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableFastSnapshotRestoresHeaders headers;
    public PostDisableFastSnapshotRestoresRequest withHeaders(PostDisableFastSnapshotRestoresHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableFastSnapshotRestoresRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}