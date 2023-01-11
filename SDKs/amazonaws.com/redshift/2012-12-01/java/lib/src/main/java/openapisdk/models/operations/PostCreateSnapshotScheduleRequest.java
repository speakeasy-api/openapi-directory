package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSnapshotScheduleRequest {
    public PostCreateSnapshotScheduleQueryParams queryParams;
    public PostCreateSnapshotScheduleRequest withQueryParams(PostCreateSnapshotScheduleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateSnapshotScheduleHeaders headers;
    public PostCreateSnapshotScheduleRequest withHeaders(PostCreateSnapshotScheduleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateSnapshotScheduleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}