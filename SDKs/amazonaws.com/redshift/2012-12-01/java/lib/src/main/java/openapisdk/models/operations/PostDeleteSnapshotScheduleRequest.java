package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSnapshotScheduleRequest {
    public PostDeleteSnapshotScheduleQueryParams queryParams;
    public PostDeleteSnapshotScheduleRequest withQueryParams(PostDeleteSnapshotScheduleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteSnapshotScheduleHeaders headers;
    public PostDeleteSnapshotScheduleRequest withHeaders(PostDeleteSnapshotScheduleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteSnapshotScheduleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}