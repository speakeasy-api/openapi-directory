package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSnapshotsRequest {
    public PostCreateSnapshotsQueryParams queryParams;
    public PostCreateSnapshotsRequest withQueryParams(PostCreateSnapshotsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateSnapshotsHeaders headers;
    public PostCreateSnapshotsRequest withHeaders(PostCreateSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateSnapshotsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}