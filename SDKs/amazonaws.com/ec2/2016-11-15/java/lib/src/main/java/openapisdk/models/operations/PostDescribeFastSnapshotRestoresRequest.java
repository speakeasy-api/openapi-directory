package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeFastSnapshotRestoresRequest {
    public PostDescribeFastSnapshotRestoresQueryParams queryParams;
    public PostDescribeFastSnapshotRestoresRequest withQueryParams(PostDescribeFastSnapshotRestoresQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeFastSnapshotRestoresHeaders headers;
    public PostDescribeFastSnapshotRestoresRequest withHeaders(PostDescribeFastSnapshotRestoresHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeFastSnapshotRestoresRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}